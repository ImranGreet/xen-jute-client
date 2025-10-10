
    <style>

        /* Product Details */
        .product-details {
            background-color: white;
            padding: 40px 0;
        }

        .product-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }

        /* Product Gallery */
        .product-gallery {
            display: flex;
            flex-direction: column;
        }

        .main-image {
            width: 100%;
            height: 400px;
            background-image: url('https://images.unsplash.com/photo-1643363510506-08b2511dd7fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687');
            background-size: cover;
            background-position: center;
            border-radius: 8px;
            margin-bottom: 20px;
            position: relative;
            overflow: hidden;
        }

        .product-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: var(--accent);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .image-thumbnails {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .thumbnail {
            height: 80px;
            background-image: url('https://images.unsplash.com/photo-1643363510506-08b2511dd7fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687');
            background-size: cover;
            background-position: center;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .thumbnail.active, .thumbnail:hover {
            border-color: var(--primary);
        }

        /* Product Info */
        .product-info h1 {
            font-size: 2.2rem;
            color: var(--primary);
            margin-bottom: 10px;
        }

        .product-rating {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .stars {
            color: var(--accent);
            margin-right: 10px;
        }

        .rating-count {
            color: #777;
            font-size: 0.9rem;
        }

        .product-price {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 20px;
        }

        .product-description {
            color: #555;
            margin-bottom: 25px;
            line-height: 1.7;
        }

        /* Product Meta */
        .product-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }

        .meta-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .meta-icon {
            width: 40px;
            height: 40px;
            background-image: url('https://images.unsplash.com/photo-1643363510506-08b2511dd7fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687');
            background-size: cover;
            background-position: center;
            border-radius: 50%;
            margin-bottom: 8px;
        }

        .meta-label {
            font-size: 0.8rem;
            color: #777;
        }

        /* Customization Options */
        .customization-options {
            margin-bottom: 25px;
        }

        .option-group {
            margin-bottom: 20px;
        }

        .option-group h3 {
            margin-bottom: 10px;
            color: var(--primary);
            font-size: 1.1rem;
        }

        .color-options {
            display: flex;
            gap: 10px;
        }

        .color-option {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }

        .color-option.active {
            border-color: var(--dark);
            transform: scale(1.1);
        }

        .color-natural {
            background-color: #d2b48c;
        }

        .color-bleached {
            background-color: #f5f5dc;
        }

        .color-dyed {
            background-color: #8a9a5b;
        }

        .size-options {
            display: flex;
            gap: 10px;
        }

        .size-option {
            padding: 8px 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .size-option.active, .size-option:hover {
            border-color: var(--primary);
            background-color: rgba(45, 80, 22, 0.05);
        }

        /* Quantity & Actions */
        .quantity-section {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
        }

        .quantity-controls {
            display: flex;
            align-items: center;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
        }

        .quantity-btn {
            width: 40px;
            height: 40px;
            background-color: #f5f5f5;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        .quantity-input {
            width: 60px;
            height: 40px;
            text-align: center;
            border: none;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
        }

        .action-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        /* Product Tabs */
        .product-tabs {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .tab-headers {
            display: flex;
            border-bottom: 1px solid #eee;
        }

        .tab-header {
            padding: 15px 25px;
            cursor: pointer;
            font-weight: 600;
            color: #777;
            transition: all 0.3s ease;
            border-bottom: 2px solid transparent;
        }

        .tab-header.active {
            color: var(--primary);
            border-bottom-color: var(--primary);
        }

        .tab-content {
            padding: 30px;
        }

        .tab-pane {
            display: none;
        }

        .tab-pane.active {
            display: block;
        }

        .specs-table {
            width: 100%;
            border-collapse: collapse;
        }

        .specs-table tr {
            border-bottom: 1px solid #eee;
        }

        .specs-table td {
            padding: 12px 0;
        }

        .specs-table td:first-child {
            font-weight: 600;
            color: var(--primary);
            width: 30%;
        }

        .features-list {
            list-style: none;
            columns: 2;
            column-gap: 30px;
        }

        .features-list li {
            margin-bottom: 10px;
            padding-left: 25px;
            position: relative;
            break-inside: avoid;
        }

        .features-list li:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
        }

        /* Related Products */
        .related-products {
            background-color: #f5f5f5;
        }

        .section-title {
            text-align: center;
            margin-bottom: 40px;
            position: relative;
        }

        .section-title h2 {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 15px;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background-color: var(--accent);
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 30px;
        }

        .product-card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-10px);
        }

        .product-card-image {
            height: 200px;
            background-image: url('https://images.unsplash.com/photo-1643363510506-08b2511dd7fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687');
            background-size: cover;
            background-position: center;
        }

        .product-card-info {
            padding: 20px;
        }

        .product-card-info h3 {
            margin-bottom: 10px;
            color: var(--primary);
        }

        .product-card-price {
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 15px;
        }

        /* CTA Section */
        .cta-section {
            background: linear-gradient(rgba(45, 80, 22, 0.9), rgba(45, 80, 22, 0.9)), url('https://images.unsplash.com/photo-1643363510506-08b2511dd7fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 80px 0;
        }

        .cta-section h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .cta-section p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
        }

        .btn-light {
            background-color: white;
            color: var(--primary);
        }

        .btn-light:hover {
            background-color: var(--light);
        }


        /* Responsive Styles */
        @media (max-width: 992px) {
            .product-container {
                grid-template-columns: 1fr;
                gap: 30px;
            }
            
            .features-list {
                columns: 1;
            }
        }

        @media (max-width: 768px) {

            .action-buttons {
                grid-template-columns: 1fr;
            }

            .tab-headers {
                flex-direction: column;
            }

            .tab-header {
                text-align: center;
                border-bottom: 1px solid #eee;
            }

            .tab-header.active {
                border-bottom: 2px solid var(--primary);
            }

            .cta-section h2 {
                font-size: 2rem;
            }
        }

        @media (max-width: 576px) {
            .product-price {
                font-size: 1.5rem;
            }

            .main-image {
                height: 300px;
            }

            .image-thumbnails {
                grid-template-columns: repeat(2, 1fr);
            }

            .quantity-section {
                flex-direction: column;
                align-items: flex-start;
            }

            .btn {
                padding: 10px 20px;
                font-size: 0.9rem;
            }

            section {
                padding: 40px 0;
            }
        }
    </style>



    <!-- Product Details -->
    <section class="product-details">
        <div class="container">
            <div class="product-container">
                <!-- Product Gallery -->
                <div class="product-gallery">
                    <div class="main-image">
                        <!-- <div class="product-badge">Bestseller</div> -->
                    </div>
                    <div class="image-thumbnails">
                        <div class="thumbnail active"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                        <div class="thumbnail"></div>
                    </div>
                </div>

                <!-- Product Info -->
                <div class="product-info">
                    <h1>Classic Jute Tote Bag</h1>
                    <div class="product-rating">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <div class="rating-count">(42 reviews)</div>
                    </div>
                    <div class="product-price">$8.50</div>
                    <p class="product-description">
                        Our Classic Jute Tote Bag combines sustainability with functionality. Made from 100% natural jute fibers, this versatile bag is perfect for everyday use, grocery shopping, or as an eco-friendly promotional item. Features reinforced handles and a sturdy base for durability.
                    </p>

                    <div class="product-meta">
                        <div class="meta-item">
                            <div class="meta-icon">
                                <i class="fas fa-weight-hanging"></i>
                            </div>
                            <div class="meta-label">Load Capacity</div>
                            <div>15 kg</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-icon"></div>
                            <div class="meta-label">Dimensions</div>
                            <div>14" × 12" × 6"</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-icon"></div>
                            <div class="meta-label">Material</div>
                            <div>100% Jute</div>
                        </div>
                    </div>

                    <!-- Customization Options -->
                    <div class="customization-options">
                        <div class="option-group">
                            <h3>Color Options</h3>
                            <div class="color-options">
                                <div class="color-option color-natural active" title="Natural Jute"></div>
                                <div class="color-option color-bleached" title="Bleached Jute"></div>
                                <div class="color-option color-dyed" title="Dyed Green"></div>
                            </div>
                        </div>

                        <div class="option-group">
                            <h3>Size Options</h3>
                            <div class="size-options">
                                <div class="size-option active">Small (10"×12")</div>
                                <div class="size-option">Medium (12"×14")</div>
                                <div class="size-option">Large (14"×16")</div>
                            </div>
                        </div>
                    </div>

                    <!-- Quantity & Actions -->
                    <div class="quantity-section">
                        <div class="quantity-controls">
                            <button class="quantity-btn">-</button>
                            <input type="text" class="quantity-input" value="1">
                            <button class="quantity-btn">+</button>
                        </div>
                        <div>Minimum Order: 500 units</div>
                    </div>

                    <div class="action-buttons">
                        <a href="order.html" class="btn">Order Sample - $8.50</a>
                        <a href="order.html#bulk-order" class="btn btn-outline">Request Bulk Quote</a>
                    </div>

                    <div style="margin-top: 20px; font-size: 0.9rem; color: #777;">
                        <p><i class="fas fa-shipping-fast" style="margin-right: 8px;"></i> Free sample shipping on orders over $50</p>
                        <p><i class="fas fa-undo" style="margin-right: 8px;"></i> Sample cost credited to your first bulk order</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Product Tabs -->
    <section>
        <div class="container">
            <div class="product-tabs">
                <div class="tab-headers">
                    <div class="tab-header active">Description</div>
                    <div class="tab-header">Specifications</div>
                    <div class="tab-header">Features</div>
                    <div class="tab-header">Reviews</div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane active">
                        <h3>Product Description</h3>
                        <p>Our Classic Jute Tote Bag is crafted from premium quality jute fibers, offering both durability and eco-friendliness. The natural texture and golden hue of jute make each bag unique, while the reinforced stitching ensures long-lasting performance.</p>
                        
                        <p>Perfect for retail stores, promotional events, or everyday use, this tote bag combines practicality with environmental consciousness. The spacious main compartment and sturdy handles make it ideal for carrying groceries, books, beach essentials, or daily work items.</p>
                        
                        <h4>Key Benefits:</h4>
                        <ul>
                            <li>100% biodegradable and compostable</li>
                            <li>Strong and durable construction</li>
                            <li>Versatile for multiple uses</li>
                            <li>Excellent for brand promotion</li>
                            <li>Cost-effective bulk pricing</li>
                        </ul>
                    </div>
                    
                    <div class="tab-pane">
                        <h3>Technical Specifications</h3>
                        <table class="specs-table">
                           <tbody>
                             <tr>
                                <td>Material</td>
                                <td>100% Natural Jute Fiber</td>
                            </tr>
                            <tr>
                                <td>Dimensions</td>
                                <td>14" (H) × 12" (W) × 6" (D)</td>
                            </tr>
                            <tr>
                                <td>Weight Capacity</td>
                                <td>Up to 15 kg (33 lbs)</td>
                            </tr>
                            <tr>
                                <td>Handle Length</td>
                                <td>24" (adjustable)</td>
                            </tr>
                            <tr>
                                <td>Color Options</td>
                                <td>Natural, Bleached, Custom Dyes</td>
                            </tr>
                            <tr>
                                <td>Printing Options</td>
                                <td>Screen Printing, Digital Printing</td>
                            </tr>
                            <tr>
                                <td>MOQ</td>
                                <td>500 units</td>
                            </tr>
                            <tr>
                                <td>Lead Time</td>
                                <td>4-6 weeks for bulk orders</td>
                            </tr>
                           </tbody>
                        </table>
                    </div>
                    
                    <div class="tab-pane">
                        <h3>Product Features</h3>
                        <ul class="features-list">
                            <li>Reinforced cotton handles for comfort</li>
                            <li>Double-stitched seams for durability</li>
                            <li>Natural jute texture with rustic appeal</li>
                            <li>Eco-friendly and sustainable material</li>
                            <li>Customizable with your logo or design</li>
                            <li>Available in multiple size options</li>
                            <li>Water-resistant natural coating</li>
                            <li>Foldable for easy storage</li>
                            <li>Ideal for retail and promotional use</li>
                            <li>Complies with international quality standards</li>
                        </ul>
                    </div>
                    
                    <div class="tab-pane">
                        <h3>Customer Reviews</h3>
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>Excellent quality and service</h4>
                            <p><strong>Sarah Johnson - EcoStore USA</strong></p>
                            <p>"We ordered 2,000 of these tote bags for our retail store, and the quality exceeded our expectations. The printing was crisp, and the bags have held up well with daily use. Our customers love the eco-friendly aspect!"</p>
                        </div>
                        
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <h4>Great promotional item</h4>
                            <p><strong>Mark Thompson - GreenEvents UK</strong></p>
                            <p>"Used these bags for our sustainability conference. They were a hit with attendees! The custom printing turned out great, and the bags are much more durable than expected. Will order again for future events."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Related Products -->
    <section class="related-products">
        <div class="container">
            <div class="section-title">
                <h2>Related Products</h2>
                <p>Explore more sustainable jute products</p>
            </div>
            
            <div class="products-grid">
                <div class="product-card">
                    <div class="product-card-image"></div>
                    <div class="product-card-info">
                        <h3>Jute Laptop Bag</h3>
                        <div class="product-card-price">$24.99</div>
                        <p>Professional laptop bag with padded interior</p>
                        <a href="/product-details" class="btn" style="width: 100%; margin-top: 15px;">View Details</a>
                    </div>
                </div>
                
                <div class="product-card">
                    <div class="product-card-image"></div>
                    <div class="product-card-info">
                        <h3>Jute Backpack</h3>
                        <div class="product-card-price">$22.00</div>
                        <p>Stylish backpack with multiple compartments</p>
                        <a href="/product-details" class="btn" style="width: 100%; margin-top: 15px;">View Details</a>
                    </div>
                </div>
                
                <div class="product-card">
                    <div class="product-card-image"></div>
                    <div class="product-card-info">
                        <h3>Eco Shopper Bag</h3>
                        <div class="product-card-price">$12.00</div>
                        <p>Large shopper bag with side gussets</p>
                        <a href="/product-details" class="btn" style="width: 100%; margin-top: 15px;">View Details</a>
                    </div>
                </div>
                
                <div class="product-card">
                    <div class="product-card-image"></div>
                    <div class="product-card-info">
                        <h3>Jute Gift Box</h3>
                        <div class="product-card-price">$7.50</div>
                        <p>Elegant gift box with magnetic closure</p>
                        <a href="/product-details" class="btn" style="width: 100%; margin-top: 15px;">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    </section>



