    import { useState, useEffect } from 'react';
    import type { Car } from '../types/car';

    const useAllCars = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCars = async () => {
        try {
            const response = await fetch('https://6a0c59835aa893e1015bae8c.mockapi.io/api/v1/cars');
            if (!response.ok) throw new Error('Failed to fetch cars');
            const data = await response.json();
            setCars(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
        };

        fetchCars();
    }, []);

    return { cars, loading, error };
    };

    export default useAllCars;