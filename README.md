# MusicPic.
This is my portfolio2 project for the Code Institute Full-stack developer course.

MusicPic is an in-hand music quiz mainly aimed at people on the go. The idea of the website is to be something fun to do on your way to work, for example. 
I tried to develop a website that is easy to use and navigate. Test your knowledge on music and have fun by yourself or with others, at a game night. 
Easy access to Spotify is already in the app and Wikipedia is linked at the bottom also if the user wants to expand on what they've learnt. 
I have gotten great feedback the only negative comments being a small question pool. I hope to increase this in the future. 




The questions are based on a combination of an image and a hint. 
Players have a multiple-choice button area to make a selection from. After 5 questions a score is presented out of 5 and a possibility to restart a new game. 






# The Giddy Goat.
This is my portfolio project for the Code Institute Full-stack developer course.

The Giddy Goat is a fictitious live music venue. The aim of this website is to attempt to show what a music venue's website should look like from the perspective of a live music lover and hopefully also other like-minded individuals. I aimed to create a website that is easy to navigate and quickly gives the information most important to the user, and in turn encourage repeat use. Through sharing the website with other people, I have gotten very positive feedback, with the only critique being the lack of a drink's and/or food menu. Unfortunately, I have not had the time to implement this.

[Welcome to the Giddy Goat!](https://goidz.github.io/the-giddy-goat/)

## Layout and features.
The website consists of three separate pages, all are accessed by a navigation bar at the top of the home-page.
![Navigation bar](docs_imgs_readme/nav_bar.png)

### Home-page.
At the top of the home-page is the navigation bar. The venue title also acts as navigation back to the home-page. To the right is the gigs-page and about-page headings, which links to their respective pages. A title attribute is embedded in each, giving the user information on page location when hovered by a mouse.
Underneath the navigation bar is the main image. It strives to set the tone of the venue and website, and hopefully is striking enough to encourage the user to explore further.
Layered atop the main image is the address and further down the page the user can find Google Maps that also links to said page.
The bottom of the page consist of functioning social media icons and an icon that links back to the top of the page. All the icons were created using Fontawesome.com. (All the icons are linked to home-pages of the websites they represent because it's a fictitious establishment)

![Top of the home-page](docs_imgs_readme/home-screen_top.png)  ![Bottom of home-page](docs_imgs_readme/home-screen_bottom.png)

### Gigs-page.
When the gigs-page is selected, it navigates to the venues events section. All the events are placed in a column and has a link to a ticket website. (In this case, to eventim.de) I selected the fonts of the events rows using the randomized pallets on Venngage.com. The choices were based on trying to make the site easier to use for the visually impaired. At the bottom of the page Google-maps can again be found and underneath that again the social media icons. In addition to these icons, there's also Spotify and YouTube to assist and encourage users to discover new music. Both icons link to their respective homepages and are generated using Fontawesome.com

![Top of the Gigs-page](docs_imgs_readme/gigs_top.png) ![Bottom of the Gigs-page](docs_imgs_readme/footer_gigs.png)

### About page.
The about page consists of an introduction of the venue and a contact section with an email link that links directly to the user's internal email program. Again, Google-maps and a footer with social media links and an icon linking to the top of the page.

![Top of the about-page](docs_imgs_readme/about_top.png)

## Outstanding elements of the page.

Unfortunately, I ran out of time to finalize everything I would have liked to.

-Some of the media queries are not perfect, and I would like to rectify these at a later date.

## Testing

The following testing was done:

-W3C HTML Validator reported no errors.
-w3c CSS Validator reported no errors.


![html-index](docs_imgs_readme/w3c_html_index.png)

![html-gigs-page](docs_imgs_readme/w3c_html_gigs.png)

![html-about-page](docs_imgs_readme/w3c_html_about.png)

![CSS](docs_imgs_readme/w3c_csn_index.png)

I also ran the code through AmIResponsive.co.uk.

![am i responsive](docs_imgs_readme/am-i-responsive.png)

Lastly, I ran it through Google Chrome Lighthouse.

![lighthouse-index](docs_imgs_readme/lighthouse_index.png)  ![lighthouse-gigs](docs_imgs_readme/lighthouse_gigs.png)    ![lighthouse-about](docs_imgs_readme/lighthouse_about.png)


## Bug fixes and to do.

 - Lighthouse pointed out that there was no title attribute in the Iframe used for Google-maps.
 - Have forgotten numerous closing tags in the HTML during the course of this project.
 - There was an (x-y)overflow problem on larger devices. I think solved this by adding scroll on the y-access and overflow-hide on the y-axis. 
 - I struggled with colours on certain parts of the website but solved that by utilizing Venngage.com's randomized pallet function.
 - I struggled a lot with media queries, which will be noticeable on some devices in landscape mode. Some are fixed, but many aren't.
 
 ## Websites used for assistance.

 [Venngage for colour pallets](https://venngage.com/) (Unfortunately the link does not want to work.)
 
 [Font Awesome for icons throughout the webpage](https://fontawesome.com)
 
 [Favicon taken from Favicon.cc_ by Miche99e](https://www.favicon.cc)
 
 [Google Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
 
 [Responsive Design Test](https://amiresponsive.co.uk)
 
 [Map](https://www.google.com/maps)
 
 [Google Fonts](https://fonts.google.com/)


 ## Deployment.

- In the repository section in GitHub, click on "The Giddy Goat".
- click the 'Settings' in the middle near the top of the page.
- On the left side of the page under "Code and Automation" select 'Pages' at the bottom of the section.
- Under "Build and Deployment" > "Source" find the dropdown menu under "Branch" and select  "Main".
- Click the 'Save' button.
- Deployment should be confirmed by a message on a green background saying "Your site is published at" followed by the web address.

## Used resources.

Inspiration and guidance from especially [W3School](https://www.w3schools.com/) and [Mdn Developers](https://developer.mozilla.org/en-US/)

## acknowledgements
Antonio Rodriguez for all his help!
