

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Request Product Samples</h1>
            <p>Experience the quality of our jute and bamboo products firsthand before placing your bulk order</p>
        </div>
    </section>

    <!-- Sample Request Form -->
    <section class="sample-request">
        <div class="container">
            <div class="form-container">
                <div class="form-header">
                    <h2>Sample Request Form</h2>
                    <p>Complete this form to receive product samples. Sample costs will be credited to your first bulk order.</p>
                </div>

                <div class="form-progress">
                    <div class="progress-step completed" id="step1">
                        <div class="step-number">1</div>
                        <div class="step-label">Products</div>
                    </div>
                    <div class="progress-step active" id="step2">
                        <div class="step-number">2</div>
                        <div class="step-label">Details</div>
                    </div>
                    <div class="progress-step" id="step3">
                        <div class="step-number">3</div>
                        <div class="step-label">Shipping</div>
                    </div>
                    <div class="progress-step" id="step4">
                        <div class="step-number">4</div>
                        <div class="step-label">Review</div>
                    </div>
                </div>

                <div class="form-body">
                    <!-- Step 1: Product Selection -->
                    <div class="form-section active" id="section1">
                        <h3 class="section-title">Select Products to Sample</h3>
                        
                        <div class="product-selection">
                            <div class="product-item">
                                <div class="product-info">
                                    <div class="product-image">
                                        <i class="fas fa-shopping-bag"></i>
                                    </div>
                                    <div class="product-details">
                                        <h4>Classic Jute Tote Bag</h4>
                                        <p>Medium size, natural jute, standard handles</p>
                                        <div class="product-price">$5 per sample</div>
                                    </div>
                                </div>
                                <div class="product-quantity">
                                    <button class="quantity-btn minus" data-product="tote">-</button>
                                    <input type="number" class="quantity-input" id="tote-qty" value="0" min="0" max="3">
                                    <button class="quantity-btn plus" data-product="tote">+</button>
                                </div>
                            </div>
                            
                            <div class="product-item">
                                <div class="product-info">
                                    <div class="product-image">
                                        <i class="fas fa-laptop"></i>
                                    </div>
                                    <div class="product-details">
                                        <h4>Jute Laptop Bag</h4>
                                        <p>13-15" laptop compartment, padded interior</p>
                                        <div class="product-price">$8 per sample</div>
                                    </div>
                                </div>
                                <div class="product-quantity">
                                    <button class="quantity-btn minus" data-product="laptop">-</button>
                                    <input type="number" class="quantity-input" id="laptop-qty" value="0" min="0" max="3">
                                    <button class="quantity-btn plus" data-product="laptop">+</button>
                                </div>
                            </div>
                            
                            <div class="product-item">
                                <div class="product-info">
                                    <div class="product-image">
                                        <i class="fas fa-gift"></i>
                                    </div>
                                    <div class="product-details">
                                        <h4>Jute Gift Box</h4>
                                        <p>12" × 9" × 4", magnetic closure</p>
                                        <div class="product-price">$7 per sample</div>
                                    </div>
                                </div>
                                <div class="product-quantity">
                                    <button class="quantity-btn minus" data-product="giftbox">-</button>
                                    <input type="number" class="quantity-input" id="giftbox-qty" value="0" min="0" max="3">
                                    <button class="quantity-btn plus" data-product="giftbox">+</button>
                                </div>
                            </div>
                            
                            <div class="product-item">
                                <div class="product-info">
                                    <div class="product-image">
                                        <i class="fas fa-box-open"></i>
                                    </div>
                                    <div class="product-details">
                                        <h4>Bamboo Storage Box</h4>
                                        <p>10" × 10" × 6", slide-top lid</p>
                                        <div class="product-price">$9 per sample</div>
                                    </div>
                                </div>
                                <div class="product-quantity">
                                    <button class="quantity-btn minus" data-product="bamboo">-</button>
                                    <input type="number" class="quantity-input" id="bamboo-qty" value="0" min="0" max="3">
                                    <button class="quantity-btn plus" data-product="bamboo">+</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-navigation">
                            <div></div> <!-- Empty div for spacing -->
                            <button class="btn" id="nextToStep2">Continue to Details</button>
                        </div>
                    </div>

                    <!-- Step 2: Customer Details -->
                    <div class="form-section" id="section2">
                        <h3 class="section-title">Your Information</h3>
                        
                        <form id="customerDetails">
                            <div class="form-grid">
                                <div class="form-group">
                                    <label for="fullName">Full Name *</label>
                                    <input type="text" id="fullName" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email Address *</label>
                                    <input type="email" id="email" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="company">Company Name</label>
                                    <input type="text" id="company" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone Number *</label>
                                    <input type="tel" id="phone" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="country">Country *</label>
                                    <select id="country" class="form-control" required>
                                        <option value="">Select Country</option>
                                        <option value="us">United States</option>
                                        <option value="ca">Canada</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="de">Germany</option>
                                        <option value="fr">France</option>
                                        <option value="jp">Japan</option>
                                        <option value="au">Australia</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="address">Street Address *</label>
                                    <input type="text" id="address" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="city">City *</label>
                                    <input type="text" id="city" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="state">State/Province</label>
                                    <input type="text" id="state" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="zip">ZIP/Postal Code *</label>
                                    <input type="text" id="zip" class="form-control" required>
                                </div>
                                <div class="form-group full-width">
                                    <label for="businessType">Type of Business</label>
                                    <select id="businessType" class="form-control">
                                        <option value="">Select Business Type</option>
                                        <option value="retail">Retail Store</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="wholesale">Wholesaler/Distributor</option>
                                        <option value="corporate">Corporate Gifting</option>
                                        <option value="event">Event Planning</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="form-group full-width">
                                    <label for="purpose">Intended Use for Samples</label>
                                    <textarea id="purpose" class="form-control" placeholder="Please describe how you plan to use our products..."></textarea>
                                </div>
                            </div>
                            
                            <div class="form-navigation">
                                <button type="button" class="btn btn-outline" id="backToStep1">Back to Products</button>
                                <button type="button" class="btn" id="nextToStep3">Continue to Shipping</button>
                            </div>
                        </form>
                    </div>

                    <!-- Step 3: Shipping & Customization -->
                    <div class="form-section" id="section3">
                        <h3 class="section-title">Shipping & Customization</h3>
                        
                        <div class="form-group">
                            <label>Shipping Method *</label>
                            <div class="shipping-options">
                                <div class="shipping-option active" data-shipping="standard">
                                    <h4>Standard Shipping</h4>
                                    <div class="shipping-price">$15</div>
                                    <div class="shipping-time">7-14 business days</div>
                                </div>
                                <div class="shipping-option" data-shipping="express">
                                    <h4>Express Shipping</h4>
                                    <div class="shipping-price">$35</div>
                                    <div class="shipping-time">3-5 business days</div>
                                </div>
                                <div class="shipping-option" data-shipping="priority">
                                    <h4>Priority Shipping</h4>
                                    <div class="shipping-price">$65</div>
                                    <div class="shipping-time">1-2 business days</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Customization Options</label>
                            <div class="customization-options">
                                <div class="custom-option" data-custom="none">
                                    <h4>Standard Samples</h4>
                                    <p>Receive our standard product samples as-is</p>
                                </div>
                                <div class="custom-option" data-custom="color">
                                    <h4>Color Variations</h4>
                                    <p>Request specific color options (additional $2 per sample)</p>
                                </div>
                                <div class="custom-option" data-custom="print">
                                    <h4>Logo Printing</h4>
                                    <p>Add your logo to samples (additional $5 per sample)</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group full-width">
                            <label for="specialRequests">Special Requests or Notes</label>
                            <textarea id="specialRequests" class="form-control" placeholder="Any specific requirements, color preferences, or additional information..."></textarea>
                        </div>
                        
                        <div class="order-summary">
                            <div class="summary-header">
                                <h3>Order Summary</h3>
                                <span id="items-count">0 items</span>
                            </div>
                            <div class="summary-items" id="summary-items">
                                <!-- Items will be dynamically added here -->
                            </div>
                            <div class="summary-item">
                                <span>Shipping</span>
                                <span id="shipping-cost">$15.00</span>
                            </div>
                            <div class="summary-item" id="customization-cost-container" style="display: none;">
                                <span>Customization</span>
                                <span id="customization-cost">$0.00</span>
                            </div>
                            <div class="summary-total">
                                <span>Total</span>
                                <span id="total-cost">$15.00</span>
                            </div>
                        </div>
                        
                        <div class="form-navigation">
                            <button type="button" class="btn btn-outline" id="backToStep2">Back to Details</button>
                            <button type="button" class="btn" id="nextToStep4">Review & Submit</button>
                        </div>
                    </div>

                    <!-- Step 4: Review & Submit -->
                    <div class="form-section" id="section4">
                        <h3 class="section-title">Review Your Sample Request</h3>
                        
                        <div class="form-group">
                            <h4>Selected Products</h4>
                            <div id="review-products">
                                <!-- Products will be dynamically added here -->
                            </div>
                        </div>
                        
                        <div class="form-grid">
                            <div class="form-group">
                                <h4>Contact Information</h4>
                                <div id="review-contact">
                                    <!-- Contact info will be dynamically added here -->
                                </div>
                            </div>
                            <div class="form-group">
                                <h4>Shipping Details</h4>
                                <div id="review-shipping">
                                    <!-- Shipping info will be dynamically added here -->
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group full-width">
                            <h4>Special Requests</h4>
                            <div id="review-requests">
                                <!-- Special requests will be displayed here -->
                            </div>
                        </div>
                        
                        <div class="order-summary">
                            <div class="summary-header">
                                <h3>Final Cost</h3>
                            </div>
                            <div class="summary-items" id="final-summary-items">
                                <!-- Final items will be dynamically added here -->
                            </div>
                            <div class="summary-total">
                                <span>Total</span>
                                <span id="final-total-cost">$0.00</span>
                            </div>
                            <p class="form-help" style="margin-top: 15px;">
                                * Sample costs (excluding shipping) will be credited toward your first bulk order of 1,000+ units.
                            </p>
                        </div>
                        
                        <div class="form-navigation">
                            <button type="button" class="btn btn-outline" id="backToStep3">Back to Shipping</button>
                            <button type="button" class="btn" id="submitRequest">Submit Sample Request</button>
                        </div>
                    </div>

                    <!-- Success Message -->
                    <div class="success-message" id="successMessage">
                        <div class="success-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <h2>Sample Request Submitted!</h2>
                        <p>Thank you for your sample request. We have received your information and will contact you within 24 hours to confirm your order and provide tracking details.</p>
                        <p>Your sample cost (excluding shipping) will be credited to your first bulk order of 1,000+ units.</p>
                        <div style="margin-top: 30px;">
                            <a href="index.html" class="btn">Return to Homepage</a>
                            <a href="products.html" class="btn btn-outline" style="margin-left: 15px;">Browse More Products</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 
 <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: #2d5016;
            --secondary: #8a9a5b;
            --accent: #d4af37;
            --light: #f5f5f5;
            --dark: #333;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: #f9f9f9;
            color: var(--dark);
            line-height: 1.6;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        section {
            padding: 80px 0;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .btn:hover {
            background-color: var(--secondary);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* Header Styles */
        header {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary);
            text-decoration: none;
        }

        .logo span {
            color: var(--accent);
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-links li {
            margin-left: 30px;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .hamburger {
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
        }

        /* Page Header */
        .page-header {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
            background-size: cover;
            background-position: center;
            padding: 150px 0 80px;
            color: white;
            text-align: center;
        }

        .page-header h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .page-header p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
        }

        /* Sample Request Form */
        .sample-request {
            background-color: white;
            padding: 60px 0;
        }

        .form-container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .form-header {
            background-color: var(--primary);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .form-header h2 {
            font-size: 1.8rem;
            margin-bottom: 10px;
        }

        .form-progress {
            display: flex;
            justify-content: space-between;
            padding: 20px 30px;
            background-color: #f9f9f9;
            border-bottom: 1px solid #eee;
        }

        .progress-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            position: relative;
        }

        .progress-step:not(:last-child):after {
            content: '';
            position: absolute;
            top: 20px;
            right: -50%;
            width: 100%;
            height: 2px;
            background-color: #ddd;
            z-index: 1;
        }

        .step-number {
            width: 40px;
            height: 40px;
            background-color: #ddd;
            color: #777;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            margin-bottom: 10px;
            z-index: 2;
        }

        .progress-step.active .step-number {
            background-color: var(--primary);
            color: white;
        }

        .progress-step.completed .step-number {
            background-color: var(--accent);
            color: white;
        }

        .progress-step.completed:after {
            background-color: var(--accent);
        }

        .step-label {
            font-size: 0.9rem;
            color: #777;
            text-align: center;
        }

        .progress-step.active .step-label {
            color: var(--primary);
            font-weight: 600;
        }

        .form-body {
            padding: 40px;
        }

        .form-section {
            display: none;
        }

        .form-section.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .section-title {
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
            color: var(--primary);
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group.full-width {
            grid-column: 1 / -1;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--dark);
        }

        .form-control {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        .form-control:focus {
            border-color: var(--primary);
            outline: none;
        }

        textarea.form-control {
            min-height: 120px;
            resize: vertical;
        }

        .form-help {
            font-size: 0.85rem;
            color: #777;
            margin-top: 5px;
        }

        /* Product Selection */
        .product-selection {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }

        .product-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #eee;
        }

        .product-item:last-child {
            border-bottom: none;
        }

        .product-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .product-image {
            width: 60px;
            height: 60px;
            background-color: #ddd;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            font-size: 1.5rem;
        }

        .product-details h4 {
            margin-bottom: 5px;
            color: var(--primary);
        }

        .product-details p {
            color: #777;
            font-size: 0.9rem;
        }

        .product-quantity {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .quantity-btn {
            width: 30px;
            height: 30px;
            background-color: #eee;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .quantity-input {
            width: 50px;
            text-align: center;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        /* Customization Options */
        .customization-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
        }

        .custom-option {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .custom-option.active {
            border-color: var(--primary);
            background-color: rgba(45, 80, 22, 0.05);
        }

        .custom-option h4 {
            margin-bottom: 10px;
            color: var(--primary);
        }

        /* Shipping Options */
        .shipping-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
        }

        .shipping-option {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }

        .shipping-option.active {
            border-color: var(--primary);
            background-color: rgba(45, 80, 22, 0.05);
        }

        .shipping-option h4 {
            margin-bottom: 10px;
            color: var(--primary);
        }

        .shipping-price {
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 5px;
        }

        .shipping-time {
            font-size: 0.9rem;
            color: #777;
        }

        /* Order Summary */
        .order-summary {
            background-color: #f9f9f9;
            padding: 25px;
            border-radius: 8px;
            margin-top: 30px;
        }

        .summary-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #ddd;
        }

        .summary-header h3 {
            color: var(--primary);
        }

        .summary-items {
            margin-bottom: 20px;
        }

        .summary-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .summary-total {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            font-size: 1.1rem;
            padding-top: 15px;
            border-top: 1px solid #ddd;
            color: var(--primary);
        }

        /* Form Navigation */
        .form-navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }

        .btn-outline {
            background-color: transparent;
            border: 1px solid var(--primary);
            color: var(--primary);
        }

        .btn-outline:hover {
            background-color: var(--primary);
            color: white;
        }

        /* Success Message */
        .success-message {
            text-align: center;
            padding: 60px 40px;
            display: none;
        }

        .success-icon {
            width: 80px;
            height: 80px;
            background-color: var(--accent);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            margin: 0 auto 20px;
        }

        .success-message h2 {
            margin-bottom: 15px;
            color: var(--primary);
        }

        .success-message p {
            margin-bottom: 30px;
            color: #555;
        }

        /* Footer */
        footer {
            background-color: var(--primary);
            color: white;
            padding: 50px 0 20px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }

        .footer-col h3 {
            margin-bottom: 20px;
            font-size: 1.2rem;
        }

        .footer-col p, .footer-col a {
            color: #ddd;
            margin-bottom: 10px;
            display: block;
            text-decoration: none;
        }

        .footer-col a:hover {
            color: white;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background-color: var(--accent);
            transform: translateY(-3px);
        }

        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 0.9rem;
            color: #aaa;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
            .page-header h1 {
                font-size: 2.2rem;
            }
            
            .form-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .navbar {
                padding: 15px 0;
            }

            .nav-links {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                flex-direction: column;
                background-color: white;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                padding: 20px 0;
            }

            .nav-links.active {
                left: 0;
            }

            .nav-links li {
                margin: 15px 0;
            }

            .hamburger {
                display: block;
            }

            .page-header h1 {
                font-size: 2rem;
            }

            .page-header p {
                font-size: 1rem;
            }

            .form-progress {
                flex-direction: column;
                gap: 20px;
            }

            .progress-step:not(:last-child):after {
                display: none;
            }

            .product-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }

            .product-quantity {
                align-self: flex-end;
            }
        }

        @media (max-width: 576px) {
            .page-header h1 {
                font-size: 1.8rem;
            }

            .btn {
                padding: 10px 20px;
                font-size: 0.9rem;
            }

            section {
                padding: 60px 0;
            }

            .form-body {
                padding: 20px;
            }
        }
    </style>