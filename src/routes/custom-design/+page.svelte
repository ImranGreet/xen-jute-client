<script lang="ts">
    import { onMount } from 'svelte';
    
    // Reactive variables
    let bagType = 'tote';
    let bagSize = 'medium';
    let juteColor = 'natural';
    let handleType = 'standard';
    let printingType = 'silkscreen';
    let designText = '';
    let quantity = 1000;
    let timeline = 'standard';
    let additionalNotes = '';
    let contactInfo = {
        name: '',
        email: '',
        company: '',
        phone: '',
        country: ''
    };
    let selectedFile:any = null;
    let previewView = 'front';
    let mobileMenuOpen = false;
    
    // Specification summary
    $: specSummary = {
        type: formatText(bagType) + ' Bag',
        size: getSizeText(bagSize),
        color: formatText(juteColor) + ' Jute',
        handles: formatText(handleType),
        printing: formatText(printingType)
    };
    
    // Color options
    const colorOptions = [
        { id: 'natural', class: 'color-natural', title: 'Natural Jute' },
        { id: 'bleached', class: 'color-bleached', title: 'Bleached Jute' },
        { id: 'dyed', class: 'color-dyed', title: 'Dyed Jute' },
        { id: 'custom', class: 'color-custom', title: 'Custom Color' }
    ];
    
    // Bag types
    const bagTypes = [
        { value: 'tote', label: 'Tote Bag' },
        { value: 'shopper', label: 'Shopper Bag' },
        { value: 'laptop', label: 'Laptop Bag' },
        { value: 'backpack', label: 'Backpack' },
        { value: 'promo', label: 'Promotional Bag' },
        { value: 'drawstring', label: 'Drawstring Bag' }
    ];
    
    // Bag sizes
    const bagSizes = [
        { value: 'small', label: 'Small (10" x 12")' },
        { value: 'medium', label: 'Medium (12" x 14")' },
        { value: 'large', label: 'Large (14" x 16")' },
        { value: 'xlarge', label: 'Extra Large (16" x 18")' },
        { value: 'custom', label: 'Custom Size' }
    ];
    
    // Handle types
    const handleTypes = [
        { value: 'standard', label: 'Standard Jute Handles' },
        { value: 'reinforced', label: 'Reinforced Handles' },
        { value: 'cotton', label: 'Cotton Webbing Handles' },
        { value: 'leather', label: 'Leather Handles' },
        { value: 'adjustable', label: 'Adjustable Shoulder Strap' }
    ];
    
    // Printing types
    const printingTypes = [
        { value: 'silkscreen', label: 'Silkscreen Printing' },
        { value: 'digital', label: 'Digital Printing' },
        { value: 'embroidery', label: 'Embroidery' },
        { value: 'patch', label: 'Leather/Patch' },
        { value: 'none', label: 'No Printing' }
    ];
    
    // Timeline options
    const timelineOptions = [
        { value: 'standard', label: 'Standard (4-6 weeks)' },
        { value: 'express', label: 'Express (2-3 weeks)' },
        { value: 'urgent', label: 'Urgent (1-2 weeks)' }
    ];
    
    // Process steps
    const processSteps = [
        { number: 1, title: 'Submit Your Design', description: 'Use our design portal or upload your own design files with specifications.' },
        { number: 2, title: 'Review & Quote', description: 'We\'ll review your design and provide a detailed quote within 24-48 hours.' },
        { number: 3, title: 'Sample Production', description: 'We create a physical sample for your approval before mass production.' },
        { number: 4, title: 'Bulk Manufacturing', description: 'Once approved, we manufacture your order with strict quality control.' }
    ];
    
    // Capabilities
    const capabilities = [
        { icon: 'fas fa-print', title: 'Printing Techniques', description: 'Silkscreen, digital printing, heat transfer, and foil stamping on jute fabric.' },
        { icon: 'fas fa-palette', title: 'Color Options', description: 'Natural, bleached, or custom-dyed jute in various color combinations.' },
        { icon: 'fas fa-ruler-combined', title: 'Size Variations', description: 'Custom sizes and dimensions to meet your specific requirements.' },
        { icon: 'fas fa-seedling', title: 'Material Mix', description: 'Combine jute with cotton, linen, or other fabrics for unique designs.' },
        { icon: 'fas fa-vest', title: 'Accessories', description: 'Add pockets, zippers, buttons, linings, and other functional elements.' },
        { icon: 'fas fa-award', title: 'Quality Assurance', description: 'Rigorous quality checks at every stage of the production process.' }
    ];
    
    // Helper functions
    function formatText(text:any) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    
    function getSizeText(size:any) {
        const sizeObj = bagSizes.find(s => s.value === size);
        return sizeObj ? sizeObj.label : '';
    }
    
    function getBagColor() {
        switch(juteColor) {
            case 'natural': return '#d2b48c';
            case 'bleached': return '#f5f5dc';
            case 'dyed': return '#8a9a5b';
            case 'custom': return 'linear-gradient(45deg, #d2b48c, #8a9a5b)';
            default: return '#d2b48c';
        }
    }
    
    function handleFileUpload(event:any) {
        const file = event.target.files[0];
        if (file) {
            selectedFile = file;
            designText = `Your Design: ${file.name}`;
        }
    }
    
    function handleSubmit(event:any) {
        event.preventDefault();
        
        const formData = {
            bagType,
            bagSize,
            juteColor,
            handleType,
            printingType,
            designText,
            quantity,
            timeline,
            additionalNotes,
            contactInfo,
            file: selectedFile
        };
        
        // In a real implementation, you would send this data to your server
        console.log('Form submitted:', formData);
        alert('Thank you for your custom design request! We will review your design and contact you within 24-48 hours with a quote.');
        
        // Reset form
        bagType = 'tote';
        bagSize = 'medium';
        juteColor = 'natural';
        handleType = 'standard';
        printingType = 'silkscreen';
        designText = '';
        quantity = 1000;
        timeline = 'standard';
        additionalNotes = '';
        contactInfo = {
            name: '',
            email: '',
            company: '',
            phone: '',
            country: ''
        };
        selectedFile = null;
    }
    
    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
    
    function closeMobileMenu() {
        mobileMenuOpen = false;
    }
</script>



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

    .section-title {
        text-align: center;
        margin-bottom: 50px;
        position: relative;
    }

    .section-title h2 {
        font-size: 2.5rem;
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

    .nav-links a:hover,
    .nav-links a.active {
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
        font-size: 3rem;
        margin-bottom: 20px;
    }

    .page-header p {
        font-size: 1.2rem;
        max-width: 700px;
        margin: 0 auto 30px;
    }

    /* Design Process */
    .design-process {
        background-color: white;
    }

    .process-steps {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 50px;
    }

    .process-step {
        flex: 1;
        min-width: 250px;
        text-align: center;
        padding: 0 20px;
        margin-bottom: 30px;
        position: relative;
    }

    .step-number {
        width: 60px;
        height: 60px;
        background-color: var(--primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 auto 20px;
    }

    .process-step h3 {
        margin-bottom: 15px;
        color: var(--primary);
    }

    .process-step p {
        color: #666;
    }

    /* Design Portal */
    .design-portal {
        background-color: #f5f5f5;
    }

    .portal-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
    }

    .design-form-container {
        background-color: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    .design-preview {
        background-color: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .preview-area {
        width: 100%;
        height: 300px;
        background-color: #f9f9f9;
        border: 2px dashed #ddd;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        overflow: hidden;
    }

    .preview-bag {
        width: 200px;
        height: 250px;
        background-color: #d2b48c;
        border-radius: 5px;
        position: relative;
        transition: all 0.3s ease;
    }

    .preview-handle {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 30px;
        background-color: #d2b48c;
        border-radius: 15px;
    }

    .preview-design {
        width: 80%;
        height: 60%;
        background-color: rgba(255, 255, 255, 0.7);
        margin: 20% auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        text-align: center;
        padding: 10px;
        word-break: break-word;
    }

    .preview-controls {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .preview-btn {
        padding: 8px 15px;
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .preview-btn.active {
        background-color: var(--primary);
        color: white;
        border-color: var(--primary);
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
    }

    .form-control {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
    }

    textarea.form-control {
        min-height: 100px;
        resize: vertical;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }

    .upload-area {
        border: 2px dashed #ddd;
        border-radius: 4px;
        padding: 30px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 20px;
    }

    .upload-area:hover {
        border-color: var(--primary);
        background-color: rgba(45, 80, 22, 0.05);
    }

    .upload-area i {
        font-size: 2rem;
        color: var(--primary);
        margin-bottom: 10px;
    }

    .file-input {
        display: none;
    }

    .color-options {
        display: flex;
        gap: 10px;
        margin-top: 10px;
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

    .color-custom {
        background: linear-gradient(45deg, #d2b48c 50%, #8a9a5b 50%);
    }

    .spec-summary {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
    }

    .spec-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }

    .spec-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .spec-value {
        font-weight: 600;
        color: var(--primary);
    }

    /* Capabilities */
    .capabilities {
        background-color: white;
    }

    .capabilities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
    }

    .capability-card {
        background-color: #f9f9f9;
        padding: 30px;
        border-radius: 8px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .capability-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    .capability-icon {
        width: 70px;
        height: 70px;
        background-color: var(--primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        margin: 0 auto 20px;
    }

    .capability-card h3 {
        margin-bottom: 15px;
        color: var(--primary);
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
            font-size: 2.5rem;
        }
        
        .portal-container {
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

        .process-steps {
            flex-direction: column;
        }

        .process-step {
            margin-bottom: 40px;
        }

        .form-row {
            grid-template-columns: 1fr;
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
    }
</style>



<!-- Page Header -->
<section class="page-header">
    <div class="container">
        <h1>Custom Design Portal</h1>
        <p>Create your unique jute bag designs with our easy-to-use design portal. Perfect for brands, retailers, and promotional events.</p>
        <a href="#design-form" class="btn">Start Designing</a>
    </div>
</section>

<!-- Design Process -->
<section class="design-process">
    <div class="container">
        <div class="section-title">
            <h2>Our Design Process</h2>
            <p>Simple steps from concept to delivery</p>
        </div>
        <div class="process-steps">
            {#each processSteps as step}
                <div class="process-step">
                    <div class="step-number">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Design Portal -->
<section class="design-portal" id="design-form">
    <div class="container">
        <div class="section-title">
            <h2>Design Your Bag</h2>
            <p>Customize every aspect of your jute bag</p>
        </div>
        <div class="portal-container">
            <div class="design-form-container">
                <form on:submit={handleSubmit}>
                    <div class="form-group">
                        <label for="bagType">Bag Type</label>
                        <select class="form-control" id="bagType" bind:value={bagType}>
                            {#each bagTypes as type}
                                <option value={type.value}>{type.label}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="bagSize">Bag Size</label>
                        <select class="form-control" id="bagSize" bind:value={bagSize}>
                            {#each bagSizes as size}
                                <option value={size.value}>{size.label}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Jute Color</label>
                        <div class="color-options">
                            {#each colorOptions as color}
                                <div 
                                    class="color-option {color.class} {juteColor === color.id ? 'active' : ''}" 
                                    title={color.title}
                                    on:click={() => juteColor = color.id}
                                ></div>
                            {/each}
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="handleType">Handle Type</label>
                        <select class="form-control" id="handleType" bind:value={handleType}>
                            {#each handleTypes as handle}
                                <option value={handle.value}>{handle.label}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="printingType">Printing Type</label>
                        <select class="form-control" id="printingType" bind:value={printingType}>
                            {#each printingTypes as printing}
                                <option value={printing.value}>{printing.label}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="designText">Design Text/Logo</label>
                        <textarea 
                            class="form-control" 
                            id="designText" 
                            placeholder="Enter text for your design or describe your logo..."
                            bind:value={designText}
                        ></textarea>
                    </div>

                    <div class="form-group">
                        <label>Upload Design Files</label>
                        <div class="upload-area" on:click={() => document.getElementById('designFile').click()}>
                            <i class="fas fa-cloud-upload-alt"></i>
                            <p>Click to upload your design files</p>
                            <p class="small">Supported formats: JPG, PNG, PDF, AI, PSD (Max 10MB)</p>
                            <input 
                                type="file" 
                                class="file-input" 
                                id="designFile" 
                                accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                                on:change={handleFileUpload}
                            >
                        </div>
                        {#if selectedFile}
                            <div id="fileList">
                                <p><i class="fas fa-file"></i> {selectedFile.name}</p>
                            </div>
                        {/if}
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="quantity">Order Quantity</label>
                            <input 
                                type="number" 
                                class="form-control" 
                                id="quantity" 
                                min="100" 
                                bind:value={quantity}
                            >
                        </div>
                        <div class="form-group">
                            <label for="timeline">Required Timeline</label>
                            <select class="form-control" id="timeline" bind:value={timeline}>
                                {#each timelineOptions as option}
                                    <option value={option.value}>{option.label}</option>
                                {/each}
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="additionalNotes">Additional Notes/Special Requirements</label>
                        <textarea 
                            class="form-control" 
                            id="additionalNotes" 
                            placeholder="Any special requirements, lining, pockets, closures, etc."
                            bind:value={additionalNotes}
                        ></textarea>
                    </div>

                    <div class="form-group">
                        <label for="contactInfo">Your Contact Information</label>
                        <div class="form-row">
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Full Name" 
                                bind:value={contactInfo.name}
                                required
                            >
                            <input 
                                type="email" 
                                class="form-control" 
                                placeholder="Email Address" 
                                bind:value={contactInfo.email}
                                required
                            >
                        </div>
                        <div class="form-row">
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Company Name"
                                bind:value={contactInfo.company}
                            >
                            <input 
                                type="tel" 
                                class="form-control" 
                                placeholder="Phone Number"
                                bind:value={contactInfo.phone}
                            >
                        </div>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Country" 
                            bind:value={contactInfo.country}
                            required
                        >
                    </div>

                    <button type="submit" class="btn" style="width: 100%;">Submit Design Request</button>
                </form>
            </div>

            <div class="design-preview">
                <h3>Design Preview</h3>
                <div class="preview-controls">
                    <button 
                        class="preview-btn {previewView === 'front' ? 'active' : ''}" 
                        on:click={() => previewView = 'front'}
                    >Front</button>
                    <button 
                        class="preview-btn {previewView === 'back' ? 'active' : ''}" 
                        on:click={() => previewView = 'back'}
                    >Back</button>
                    <button 
                        class="preview-btn {previewView === 'side' ? 'active' : ''}" 
                        on:click={() => previewView = 'side'}
                    >Side</button>
                </div>
                <div class="preview-area">
                    <div class="preview-bag" style="background-color: {getBagColor()}">
                        <div class="preview-handle" style="background-color: {getBagColor()}"></div>
                        <div 
                            class="preview-design" 
                            style="background-color: {designText ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)'}"
                        >
                            {designText || 'Your Design Will Appear Here'}
                        </div>
                    </div>
                </div>
                <div class="spec-summary">
                    <h4>Specification Summary</h4>
                    <div class="spec-item">
                        <span>Bag Type:</span>
                        <span class="spec-value">{specSummary.type}</span>
                    </div>
                    <div class="spec-item">
                        <span>Size:</span>
                        <span class="spec-value">{specSummary.size}</span>
                    </div>
                    <div class="spec-item">
                        <span>Color:</span>
                        <span class="spec-value">{specSummary.color}</span>
                    </div>
                    <div class="spec-item">
                        <span>Handles:</span>
                        <span class="spec-value">{specSummary.handles}</span>
                    </div>
                    <div class="spec-item">
                        <span>Printing:</span>
                        <span class="spec-value">{specSummary.printing}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Capabilities -->
<section class="capabilities">
    <div class="container">
        <div class="section-title">
            <h2>Our Customization Capabilities</h2>
            <p>We can bring almost any design to life</p>
        </div>
        <div class="capabilities-grid">
            {#each capabilities as capability}
                <div class="capability-card">
                    <div class="capability-icon">
                        <i class={capability.icon}></i>
                    </div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

