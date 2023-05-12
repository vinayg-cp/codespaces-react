import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';


const ProductTable = () => {
    const products = [
        {
            "id": "1",
            "title": "Apple iPhone 12 Pro Max",
            "sku": "AP-IP12P",
            "price": 1099,
            "quantity": 50,
            "image": "https://www.example.com/images/iphone-12-pro-max.jpg",
            "description": "The iPhone 12 Pro Max features a 6.7-inch Super Retina XDR display, A14 Bionic chip, 5G capable, and a pro camera system that takes low-light photography to the next level."
        },
        {
            "id": "2",
            "title": "Samsung Galaxy S21 Ultra",
            "sku": "SA-GS21U",
            "price": 1199,
            "quantity": 40,
            "image": "https://www.example.com/images/galaxy-s21-ultra.jpg",
            "description": "The Galaxy S21 Ultra features a 6.8-inch Dynamic AMOLED 2X display, Exynos 2100 chipset, 5G capable, and a quad camera system that includes a 108MP sensor and 10x optical zoom."
        },
        {
            "id": "3",
            "title": "Sony PlayStation 5",
            "sku": "SO-PS5",
            "price": 499,
            "quantity": 20,
            "image": "https://www.example.com/images/playstation-5.jpg",
            "description": "The PlayStation 5 features lightning-fast loading, haptic feedback, 3D audio, and an all-new generation of incredible PlayStation games."
        },
        {
            "id": "4",
            "title": "Microsoft Xbox Series X",
            "sku": "MI-XSX",
            "price": 499,
            "quantity": 30,
            "image": "https://www.example.com/images/xbox-series-x.jpg",
            "description": "The Xbox Series X features 12 teraflops of processing power, true 4K gaming, and up to 120 frames per second. Get ready for the future of gaming with Xbox Series X."
        },
        {
            "id": "5",
            "title": "Apple iPad Pro 12.9-inch",
            "sku": "AP-IPADPRO12",
            "price": 999,
            "quantity": 60,
            "image": "https://www.example.com/images/ipad-pro-12-9-inch.jpg",
            "description": "The iPad Pro features an advanced Liquid Retina XDR display, A12Z Bionic chip, and a pro camera system. Perfect for creatives, professionals, and anyone who wants a powerful tablet."
        },
        {
            "id": "6",
            "title": "Dell XPS 13 Laptop",
            "sku": "DE-XPS13",
            "price": 1199,
            "quantity": 25,
            "image": "https://www.example.com/images/dell-xps-13.jpg",
            "description": "The Dell XPS 13 features an 11th Gen Intel Core processor, InfinityEdge display, and a sleek, lightweight design. Perfect for anyone who needs a powerful laptop on-the-go."
        },
        {
            "id": "7",
            "title": "Canon EOS R5 Mirrorless Camera",
            "sku": "CA-EOSR5",
            "price": 3899,
            "quantity": 5,
            "image": "https://www.example.com/images/canon-eos-r5.jpg",
            "description": "Test",
        },
        {
            "id": "8",
            "title": "Bose QuietComfort 45 Wireless Headphones",
            "sku": "BO-QC45",
            "price": 329,
            "quantity": 15,
            "image": "https://www.example.com/images/bose-qc45.jpg",
            "description": "The Bose QuietComfort 45 wireless headphones deliver world-class noise cancellation, immersive sound, and 24 hours of battery life. Perfect for audiophiles and frequent travelers."
        },
        {
            "id": "9",
            "title": "Fitbit Charge 5 Fitness Tracker",
            "sku": "FI-CH5",
            "price": 179,
            "quantity": 35,
            "image": "https://www.example.com/images/fitbit-charge-5.jpg",
            "description": "The Fitbit Charge 5 fitness tracker features advanced sensors for 24/7 heart rate tracking, GPS, and sleep monitoring. Stay on top of your fitness goals with Fitbit."
        },
        {
            "id": "10",
            "title": "Instant Pot Duo Nova Pressure Cooker",
            "sku": "IN-DN",
            "price": 129,
            "quantity": 20,
            "image": "https://www.example.com/images/instant-pot-duo-nova.jpg",
            "description": "The Instant Pot Duo Nova pressure cooker is a versatile kitchen tool that can be used for pressure cooking, slow cooking, sautéing, and more. Cook delicious meals in a fraction of the time with Instant Pot."
        }
    ];
    return (
        <TableContainer component={Paper}>
            <Table aria-label="product table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Product Image</TableCell>
                        <TableCell align="left">Product Title</TableCell>
                        <TableCell align="left">Product SKU</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Available Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell align="left">
                                <img src={product.image} alt={product.title} width="50" />
                            </TableCell>
                            <TableCell align="left">{product.title}</TableCell>
                            <TableCell align="left">{product.sku}</TableCell>
                            <TableCell align="left">{product.price}</TableCell>
                            <TableCell align="left">{product.quantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductTable;
