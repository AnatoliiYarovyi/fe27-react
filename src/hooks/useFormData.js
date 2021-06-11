import { useState } from 'react';

const useFormData = initialState => {
  const [formData, setFormData] = useState({ ...initialState });

  const handleChange = ({ value, name }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return { formData, handleChange, setFormData };
};

export { useFormData };
