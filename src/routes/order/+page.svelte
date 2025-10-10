
<script>
  let currentStep = 1;
  let toteQty = 0;
  let laptopQty = 0;
  let giftboxQty = 0;
  let bambooQty = 0;
  let selectedShipping = 'standard';
  let selectedCustomization = 'none';

  const products = [
    { id: 'tote', name: 'Classic Jute Tote Bag', desc: 'Medium size, natural jute, standard handles', price: 5, qty: toteQty },
    { id: 'laptop', name: 'Jute Laptop Bag', desc: '13-15" laptop compartment, padded interior', price: 8, qty: laptopQty },
    { id: 'giftbox', name: 'Jute Gift Box', desc: '12" × 9" × 4", magnetic closure', price: 7, qty: giftboxQty },
    { id: 'bamboo', name: 'Bamboo Storage Box', desc: '10" × 10" × 6", slide-top lid', price: 9, qty: bambooQty }
  ];

  const shippingOptions = [
    { id: 'standard', name: 'Standard Shipping', price: 15, time: '7-14 business days' },
    { id: 'express', name: 'Express Shipping', price: 35, time: '3-5 business days' },
    { id: 'priority', name: 'Priority Shipping', price: 65, time: '1-2 business days' }
  ];

  const customizationOptions = [
    { id: 'none', name: 'Standard Samples', desc: 'Receive our standard product samples as-is' },
    { id: 'color', name: 'Color Variations', desc: 'Request specific color options (additional $2 per sample)' },
    { id: 'print', name: 'Logo Printing', desc: 'Add your logo to samples (additional $5 per sample)' }
  ];

  // Dummy form data
  let formData = {
    fullName: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    businessType: '',
    purpose: '',
    specialRequests: ''
  };
</script>

<style>


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

  .success-message {
    text-align: center;
    padding: 60px 40px;
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

  .footer-col p,
  .footer-col a {
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
    
    .form-body {
      padding: 20px;
    }
  }
</style>



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
        <div class="progress-step completed">
          <div class="step-number">1</div>
          <div class="step-label">Products</div>
        </div>
        <div class="progress-step active">
          <div class="step-number">2</div>
          <div class="step-label">Details</div>
        </div>
        <div class="progress-step">
          <div class="step-number">3</div>
          <div class="step-label">Shipping</div>
        </div>
        <div class="progress-step">
          <div class="step-number">4</div>
          <div class="step-label">Review</div>
        </div>
      </div>
      <div class="form-body">
        <!-- Step 1: Product Selection -->
        <div>
          <h3 class="section-title">Select Products to Sample</h3>
          <div class="product-selection">
            {#each products as product}
            <div class="product-item">
              <div class="product-info">
                <div class="product-image">
                  🛍️
                </div>
                <div class="product-details">
                  <h4>{product.name}</h4>
                  <p>{product.desc}</p>
                  <div class="product-price">${product.price} per sample</div>
                </div>
              </div>
              <div class="product-quantity">
                <button class="quantity-btn minus">-</button>
                <input type="number" class="quantity-input" value={product.qty} min="0" max="3"  />
                <button class="quantity-btn plus">+</button>
              </div>
            </div>
            {/each}
          </div>
          <div class="form-navigation">
            <div></div>
            <button class="btn">Continue to Details</button>
          </div>
        </div>

        <!-- Step 2: Customer Details -->
        <div>
          <h3 class="section-title">Your Information</h3>
          <form>
            <div class="form-grid">
              <div class="form-group">
                <label for="fullName">Full Name *</label>
                <input type="text" id="fullName" class="form-control" placeholder="John Doe" />
              </div>
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" class="form-control" placeholder="john@example.com" />
              </div>
              <div class="form-group">
                <label for="company">Company Name</label>
                <input type="text" id="company" class="form-control" placeholder="Eco Retail Ltd." />
              </div>
              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input type="tel" id="phone" class="form-control" placeholder="+1 234 567 890" />
              </div>
              <div class="form-group">
                <label for="country">Country *</label>
                <select id="country" class="form-control">
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
                <input type="text" id="address" class="form-control" placeholder="123 Main St" />
              </div>
              <div class="form-group">
                <label for="city">City *</label>
                <input type="text" id="city" class="form-control" placeholder="New York" />
              </div>
              <div class="form-group">
                <label for="state">State/Province</label>
                <input type="text" id="state" class="form-control" placeholder="NY" />
              </div>
              <div class="form-group">
                <label for="zip">ZIP/Postal Code *</label>
                <input type="text" id="zip" class="form-control" placeholder="10001" />
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
              <button type="button" class="btn btn-outline">Back to Products</button>
              <button type="button" class="btn">Continue to Shipping</button>
            </div>
          </form>
        </div>

        <!-- Step 3: Shipping & Customization -->
        <div>
          <h3 class="section-title">Shipping & Customization</h3>
          <div class="form-group">
            <label>Shipping Method *</label>
            <div class="shipping-options">
              {#each shippingOptions as option}
              <div class="shipping-option {selectedShipping === option.id ? 'active' : ''}">
                <h4>{option.name}</h4>
                <div class="shipping-price">${option.price}</div>
                <div class="shipping-time">{option.time}</div>
              </div>
              {/each}
            </div>
          </div>
          <div class="form-group">
            <label for="">Customization Options</label>
            <div class="customization-options">
              {#each customizationOptions as option}
              <div class="custom-option {selectedCustomization === option.id ? 'active' : ''}">
                <h4>{option.name}</h4>
                <p>{option.desc}</p>
              </div>
              {/each}
            </div>
          </div>
          <div class="form-group full-width">
            <label for="specialRequests">Special Requests or Notes</label>
            <textarea id="specialRequests" class="form-control" placeholder="Any specific requirements, color preferences, or additional information..."></textarea>
          </div>
          <div class="order-summary">
            <div class="summary-header">
              <h3>Order Summary</h3>
              <span>3 items</span>
            </div>
            <div class="summary-items">
              <div class="summary-item"><span>Jute Tote Bag × 1</span><span>$5.00</span></div>
              <div class="summary-item"><span>Laptop Bag × 1</span><span>$8.00</span></div>
              <div class="summary-item"><span>Gift Box × 1</span><span>$7.00</span></div>
            </div>
            <div class="summary-item">
              <span>Shipping</span>
              <span>$15.00</span>
            </div>
            <div class="summary-total">
              <span>Total</span>
              <span>$35.00</span>
            </div>
          </div>
          <div class="form-navigation">
            <button type="button" class="btn btn-outline">Back to Details</button>
            <button type="button" class="btn">Review & Submit</button>
          </div>
        </div>

        <!-- Step 4: Review & Submit -->
        <div>
          <h3 class="section-title">Review Your Sample Request</h3>
          <div class="form-group">
            <h4>Selected Products</h4>
            <div>
              <div class="summary-item"><span>Jute Tote Bag × 1</span><span>$5.00</span></div>
              <div class="summary-item"><span>Laptop Bag × 1</span><span>$8.00</span></div>
              <div class="summary-item"><span>Gift Box × 1</span><span>$7.00</span></div>
            </div>
          </div>
          <div class="form-grid">
            <div class="form-group">
              <h4>Contact Information</h4>
              <div>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john@example.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Company:</strong> Eco Retail Ltd.</p>
                <p><strong>Business Type:</strong> Retail Store</p>
              </div>
            </div>
            <div class="form-group">
              <h4>Shipping Details</h4>
              <div>
                <p><strong>Method:</strong> Standard Shipping (7-14 days) - $15</p>
                <p><strong>Address:</strong> 123 Main St, New York</p>
                <p><strong>State/Province:</strong> NY</p>
                <p><strong>ZIP/Postal Code:</strong> 10001</p>
                <p><strong>Country:</strong> United States</p>
              </div>
            </div>
          </div>
          <div class="form-group full-width">
            <h4>Special Requests</h4>
            <div>
              <p>Prefer natural color for all samples.</p>
              <p><strong>Intended Use:</strong> In-store product display</p>
            </div>
          </div>
          <div class="order-summary">
            <div class="summary-header">
              <h3>Final Cost</h3>
            </div>
            <div class="summary-items">
              <div class="summary-item"><span>Jute Tote Bag × 1</span><span>$5.00</span></div>
              <div class="summary-item"><span>Laptop Bag × 1</span><span>$8.00</span></div>
              <div class="summary-item"><span>Gift Box × 1</span><span>$7.00</span></div>
              <div class="summary-item"><span>Shipping</span><span>$15.00</span></div>
            </div>
            <div class="summary-total">
              <span>Total</span>
              <span>$35.00</span>
            </div>
            <p class="form-help" style="margin-top: 15px;">
              * Sample costs (excluding shipping) will be credited toward your first bulk order of 1,000+ units.
            </p>
          </div>
          <div class="form-navigation">
            <button type="button" class="btn btn-outline">Back to Shipping</button>
            <button type="button" class="btn">Submit Sample Request</button>
          </div>
        </div>

        <!-- Success Message -->
        <div class="success-message">
          <div class="success-icon">
            ✓
          </div>
          <h2>Sample Request Submitted!</h2>
          <p>Thank you for your sample request. We have received your information and will contact you within 24 hours to confirm your order and provide tracking details.</p>
          <p>Your sample cost (excluding shipping) will be credited to your first bulk order of 1,000+ units.</p>
          <div style="margin-top: 30px;">
            <a href="#" class="btn">Return to Homepage</a>
            <a href="#" class="btn btn-outline" style="margin-left: 15px;">Browse More Products</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

