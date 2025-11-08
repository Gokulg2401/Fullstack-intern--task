import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../utils/AuthContext';

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchTemplates();
    if (user) {
      fetchFavorites();
    }

    const handleFavoriteRemoved = (event) => {
      setFavorites(prev => prev.filter(id => id !== event.detail));
    };

    window.addEventListener('favoriteRemoved', handleFavoriteRemoved);
    return () => window.removeEventListener('favoriteRemoved', handleFavoriteRemoved);
  }, [user]);

  const fetchTemplates = async () => {
    try {
      const response = await axios.get('/api/templates');
      setTemplates(response.data);
    } catch (error) {
      console.error('Error fetching templates:', error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('/api/templates/favorites/user');
      setFavorites(response.data.map(fav => fav.id));
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const toggleFavorite = async (templateId) => {
    if (!user) return;
    
    try {
      const isFavorited = favorites.includes(templateId);
      
      if (isFavorited) {
        await axios.delete(`/api/templates/favorites/${templateId}`);
        setFavorites(prev => prev.filter(id => id !== templateId));
      } else {
        await axios.post(`/api/templates/favorites/${templateId}`);
        setFavorites(prev => [...prev, templateId]);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const handleImageError = (e) => {
    e.target.src = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;
  };

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Templates</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="🔎 Search templates by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="template-grid">
        {filteredTemplates.map(template => (
          <div key={template.id} className="template-card">
            <img 
              src={template.thumbnail_url} 
              alt={template.name}
              onError={handleImageError}
            />
            <div className="template-card-content">
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              {template.additional_description && <p className="additional-desc">{template.additional_description}</p>}
              <p><strong>Category:</strong> {template.category}</p>
              {user && (
                <button
                  className={`favorite-btn ${favorites.includes(template.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(template.id)}
                >
                  {favorites.includes(template.id) ? '❤️' : '♡'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;