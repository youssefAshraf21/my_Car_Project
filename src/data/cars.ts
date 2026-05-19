import modelS from '../assets/model-s.jpeg';
import bmw from '../assets/bmw340.jpg';
import mercedes from '../assets/c300.jpg';
import type { Car } from "../types/car";

const cars: Car[] = [
    {
        id: 1,
        name: "Tesla Model S",
        image: modelS,
        price: 79999,
    },
    {
        id: 2,
        name: "BMW 340i",
        image: bmw,
        price: 39999,
    },
    {
        id: 3,
        name: "Mercedes C300",
        image: mercedes,
        price: 99999,
    },
];

export default cars;