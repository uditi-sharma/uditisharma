# Website Building 🔮
*When I first started building my original website, I had no idea what I was doing or how to format things in order for them to really come to life. In order to learn, I utilized 3 main techniques:*
  - Going through other people's website code. I'd find a website that was hand-coded and I liked the structure of, then I'd figure out how they put blocks together to get to the layout that they achieved
  - Going on Dribbble and finding designs and looks that I liked. I discovered that I like the Apple-Hack-Club-esque look of clean, streamlined designs with medium border radii and playing with opacity.
  - Building a personal brand. Using a template for your website layouts that allows flexibility while maintaining your personal, streamlined look is a great way to save yourself time.

## How this site was built 🔨
This site is built using a framework called [Pure CSS](https://purecss.io), which makes building grid layouts easy. I always struggled with grid layouts, so this was super helpful. 

Everything is explained in detail on the [Pure CSS grid layout guide](https://purecss.io/grids/). 
For the purpose of this site, here's a 'so basically' on everything Pure CSS:

  The `pure-g` class is defined as `<div class="pure-g">` and starts a **grid** layout, which contains **units**. Units are defined as `<div class="pure-u-$number-$number">`, where the `$number` represents a fraction that indicates what portion of the layout the unit  occupies. A unit that occupies 1/2 of the layout width would be declared as `<div class="pure-u-1-2">`, a unit that occupies 3/5 would be declared as `<div class="pure-u-3-5">`, and so on. 

For the purpose of having multiple designs and elements within my code without having separate classes for each element, I designate the style for each element within the `<div>` bracket. The `<div>` for the 'View campaign' button, for example, is, `<h3 style="font-size: 1vw; line-height: 0; color: #7407FF; font-weight: 600">View campaign</h3>`. There's a fine line between comfort and efficiency that I definitely cross sometimes, but it does make it a lot faster to customize elements. 

## Tips for website building 💡

The overall framework to a site are two things: 

1. **Consistency** - how related are all your graphics to each other? How well does your site flow as one cohesive project, while having unique elements that "pop"?
2. **Usability/Interactivity** - how logically is your site structured? How individual is it? How does it show your personal brand?

In order to implement these features, there's a few things I recommend: 

1. **Make your website using Figma before you make it in real life.** [Figma](https://figma.com/) is an incredibly useful design tool. [Here's a link to this site on Figma](https://www.figma.com/file/LrrjSg5EwuNvglmiAvK1gy/Untitled?node-id=0%3A1) before it existed as an actual website. Planning on Figma helps cement a color palette and look that will help you with both consistency and usability.
2. **Pay attention to detail, like customizing selection and hover effects**. Both of these are easy to customize within CSS by adding properties to `::selection` and `$elementName:hover`, respectively. [Lachlan's](https://lachlanjc.com) is a great example of a site that uses hover effects to aid usability.
3. **Consider a light mode/dark mode toggle**. These toggles are a simple way to a) make your site more fluid and efficient and b) include the user in your design. To do this, start by declaring a `:root[]` color theme and set variables (like `h1-color`) for each data theme. Additional data themes can be named by `[data-theme= $name]`. Check out the CSS file of this site for a more cohesive example.


Thanks for liking this site! **If you liked these tips, please [consider sending me an email](mailto:lola@mgdubiel.com) letting me know**! Happy hacking!

Love, 
Karolina 💗