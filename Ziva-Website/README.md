TODO:

# Today

- Order Page > IF Empty cart, prompt "Go to Products and add to cart" with Button/Link

- Research Amazon Menus, clicking one > hiding others conserves space, but seems  a little janky

- Decide on overall CSS theme
- Create Database for products
- Create Order send to Email 
- Create Backend Server (NodeJS)

- /Add Send Order Button (Collect order as object, transfer to send email section with input fields, user email, name, phone number)


# Profile
- History of Orders

- Try Horizontal Top Menu with highest heirarchy groups > drop down menu rather than vertical


# Fill Basic Content



# Implement Google Maps API

# Implement Catalogue System

- Build Sections
- Decide Product Groups
- Left Column Group Text
- Centre Column Group Display



# Add Email Submission
- Send cart list to email
- Add email submit form


# Implement Search Bar
- Add Function => https://blog.hubspot.com/website/search-bar-design

# About Us





Right should contain list of every product within a selected group
New Vertical Menu type, small image, text and price
Click element in Vertical Menu, send that Product via id to Catalogue Page
Catalogue Page sends that Product id to Centre Display

###### Completed ##########################################

# Home Page
- //Small Company Description
- //Highlight Items - On New set loaded, animate scale up>down one by one before next set load

# Implement Search Bar
- //Add Visual//
# Add About Us
- //Contact Details
- //Small Company Description

# Implement Catalogue System
- //Switch "Catalogue" to "Products"//
- # Add Details to Text Area
- //Centre Column Right - Vertical List all Items, Condensed view//
- // # Add Preview Images//
- //On Clicking Group > Reset to Page Top//
- //Centre Column Left - Current Item, Large view//

# Generate Template Products JSON
- //At least 20 items with rough, unique details//


# Fill Basic Content
- Home Page:
- //Create Highlight Block//
- //Create Contact Us Section//
- //Add Address Text//
- //Add Email Address//
- //Add Phone Number//
- //Add Google Map //(Temp Image)//
- //Add Footer with brief contact details//
- //Update Homepage Highlight CSS
- //Homepage Highlight Lateral Scroll Animation - maybe scroll through whole product list or condense

- //Add Back to Top button at base of every page//
- //Add to Cart option//
- //Work on HomePage Banner Layout//

- Work on search bar
--- //Create Module//
--- //Make it take in input value and output via Window Alert the value//

- Work on Top Banner
--- //Make a module//
--- //Fix excessive width, overspilling//

# Home Page
-// Add Arrows to homepage highlight reel to scroll through displayed items manually//
- //Loading Catalogue via front page doesn't load related items in other items//

# Catalogue Page
- //Fix Editing list reordering the existing order//
- //Create shoping cart list//
- //Add Remove Item from List//
- //Add Quantity Counter to Item//
- //Add Price Display x Quantity//
- //Add quantity adjuster//
- //Add Link from shopping cart item to display the same item in main display//
- //Add HomePage Highlight function > Click item, load Catalogue with that item on display (Probably pass productID)// - Pass Product ID Through Link State + useLocation
- //Change Quanity - Currently a property of each item, but should be a seperate, non bound variable, may reduce issues//
- //Default Add Item to 1, Remove ability to add 0//
- //Fix CSS for Shopping Cart Items - Maybe name on top, image and info on second row//
- //Move Shopping Cart to Right Column//
- //Move Other Items in Group to grid below main Item//
- //Add Running Shopping List Total//
- //Add persistant local storage for shopping cart contents//


- //Hook Order Page Shopping Cart Functions into higher state update//
- //Order Page Shopping Cart, click image > go to catalogue > Load clicked item + group//
- //Order Page Shopping Cart, create unique Send Order function (Probably based on prop 'isOrderPage')//
- //Add rough order form populated with input fields and send button//
- //Make send button collect order info + input info as object and log to console//
- //Add Total Price to finalOrder object//

- //Add Order Form Verification//