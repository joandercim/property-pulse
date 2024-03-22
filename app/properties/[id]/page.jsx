'use client';

import { fetchProperty } from '@/utils/request';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPropertyData = async () => {
      if (!id) return;

      console.log('Fetching data')

      try {
        const fetchedProperty = await fetchProperty(id);

        setProperty(fetchedProperty);
      } catch (error) {
        console.error('Error fetching property', error);
      } finally {
        setLoading(false);
      }
    };

    if (property) return;
    
    getPropertyData();

  }, [id, property]);

  return <div>{property && property.location.street}</div>;
};
export default PropertyPage;
