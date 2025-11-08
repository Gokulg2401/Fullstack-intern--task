import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../utils/AuthContext';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchFavorites();
    }
  }, [user]);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('/api/templates/favorites/user');
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const removeFavorite = async (templateId) => {
    try {
      await axios.delete(`/api/templates/favorites/${templateId}`);
      setFavorites(prev => prev.filter(template => template.id !== templateId));
      // Also update the main templates page favorites if needed
      window.dispatchEvent(new CustomEvent('favoriteRemoved', { detail: templateId }));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const handleImageError = (e) => {
    e.target.src = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;
  };

  const filteredFavorites = favorites.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Start adding some templates to your favorites!</p>
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              placeholder="🔎 Search favorites by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="template-grid">
          {filteredFavorites.map(template => (
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
                <button
                  className="favorite-btn active"
                  onClick={() => removeFavorite(template.id)}
                  title="Remove from favorites"
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;