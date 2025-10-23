document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. SIMULATED DATA LOADING (In a real app, this is an API call)
    // ----------------------------------------------------
    const farmerData = {
        totalSales: 25750.50,
        pendingDeliveries: 3,
        listedItemsToday: 1,
        nextPaymentDate: 'Oct 30, 2025'
    };

    // Update Dashboard Metrics
    document.getElementById('total-sales').textContent = `Ksh ${farmerData.totalSales.toFixed(2)}`;
    document.getElementById('pending-deliveries').textContent = farmerData.pendingDeliveries;
    document.getElementById('listed-items').textContent = farmerData.listedItemsToday;
    document.getElementById('next-payment').textContent = farmerData.nextPaymentDate;


    // ----------------------------------------------------
    // 2. FORM SUBMISSION LOGIC
    // ----------------------------------------------------
    const newProductForm = document.getElementById('new-product-form');

    newProductForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting normally

        // Collect form data
        const productName = document.getElementById('product-name').value;
        const category = document.getElementById('category').value;
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;
        const unit = document.getElementById('unit').value;
        const description = document.getElementById('description').value;
        // const imageFile = document.getElementById('image-upload').files[0]; // For real file handling

        // Log the collected data (simulating sending it to the back-end)
        console.log("--- New Product Listing Data ---");
        console.log(`Product Name: ${productName}`);
        console.log(`Category: ${category}`);
        console.log(`Quantity: ${quantity} kg`);
        console.log(`Price: Ksh ${price} / ${unit}`);
        console.log(`Description: ${description}`);
        // console.log(`Image File Name: ${imageFile ? imageFile.name : 'No file selected'}`);
        console.log("--------------------------------");


        // ----------------------------------------------------
        // EDUCATION & INSTRUCTION: Next Steps (Back-end)
        // ----------------------------------------------------
        // In a real application, here is where you would use the 'fetch()' API
        // to send this data to a back-end server endpoint (e.g., /api/products/new)
        
        // Example structure for a real implementation:
        /*
        fetch('/api/products/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: 'Bearer token_here' 
            },
            body: JSON.stringify({
                name: productName,
                category: category,
                quantity: quantity,
                price: price,
                unit: unit,
                description: description
            })
        })
        .then(response => response.json())
        .then(data => {
            alert('Product listed successfully!');
            newProductForm.reset(); // Clear form on success
            // Logic to update the 'Items Listed Today' metric
        })
        .catch(error => {
            console.error('Error listing product:', error);
            alert('Error listing product. Please try again.');
        });
        */

        // Simple Front-end confirmation
        alert(`Listing for "${productName}" published successfully! (Simulation)`);
        newProductForm.reset(); // Clear form fields
    });
});
