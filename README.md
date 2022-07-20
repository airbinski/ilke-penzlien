# ilke-penzlien

## Requirements

* Ruby `>= 2.5.0`
* Bundler Gem

## Setup

```bash
# Install dependencies of this project
bundle install
```

## Usage

### 1. Start server for local development

1. Open the `Terminal` app
2. Run the following commands in the terminal

    ```bash
    cd dev/ilke-penzlien
    bundle exec jekyll serve
    ```
3. You can open the locally served website now on http://localhost:4000 in your Browser

### 2. Open website in editor

1. Open the `Github Desktop` app
2. Click "Fetch Origin" to maybe get the latest website update
3. Click "Open in Sublime" to open the website code in your editor
4. Now you're ready to edit the website!

### 3. Edit static pages, like "About", "Imprint", etc.

1. You find the Markdown files in the root of the project: `imprint.md`, `about.md`, `contact.md`
2. Open the file in your editor, start editing Markdown! If you save your file, the changes will directly be visible in the browser after refreshing

### 4. Edit projects

1. You find the projects defined in the `_posts` folder, create a new file here if you want to add another project
    - All files follow the same naming format which is `YYYY-MM-DD-<short-name>.md`
    - Pick a simple name which helps you to identify the project for `short-name`. For example: `2022-07-20-datscha-dreams.md`
    - They are sorted by the date in the beginning of the name, the latest project will appear on the top of the page, the earliest on the bottom
3. In the "frontmatter" area (the one at the top of each markdown document, between the `---` symbols) you can edit: 
    - `title`: name of the project
    - `category`: list of categories which can be filtered by the user on the homepage. The page will automatically add new categories to the filter
    - `featured`: image which is the one displayed first on the homepage and in the preview of the gallery
    - `images`: list of all images of the project, the user can see them on the project page
4. Images are placed in the `images` folder
    - Recommended dimensions for images are: `1600px` (longest side), max. `500kb`, better less! For thumbnail images: `800px` (longest side), max. `100kb`, better less
    - Use the JPEG format with some compression (80-90%), file names should end with `.jpg`
    - For every image you need to create the same image but smaller (thumbnail), it needs to have the same name, but with a `-thumb.jpg` ending instead. For example: `my-great-image.jpg` would also have another `my-great-image-thumb.jpg` file
5. You can write the project description in the main area of the document, again as Markdown

### 5. Edit meta information and navigation

1. Open the `_config.yml` file in your editor
2. Under `title` and `description` you can change the information of the website which will change how it is seen on search engines. The `description` field is also used for the introduction text on the home page
3. You can change the `navigation` by adding, removing or updating the items in the list. The `main` navigation is the floating one in the bottom left, the `footer` navigation is the one at the bottom of the page
4. Please note that you have to restart the server to make these changes visible in the browser! For this you need to go back to the `Terminal` app and press [Control] + [C], then run `bundle exec jekyll serve` again.

### 6. Upload your changes

1. Go back to the `Github Desktop` app
2. Click "Commit" on the bottom left to add your changes, you can also choose a commit message before if you want
3. Click "Push" in the main view
4. The changes are uploaded to GitHub now, they will be visible online in 2+ minutes

### Markdown

Markdown is a formatting language which is used to write content on this website. You can see some examples below or read this [Tutorial](https://daringfireball.net/projects/markdown/basics).

```markdown
Paragraphs are just written in one line like that: Proin vel mollis elit. Sed aliquam, tellus lobortis aliquam tincidunt.

If you want to start a new paragraph, give it two more newlines (Return) and it will appear!

If you need to break with a newline at a special point\
use this backslash. Or the<br>
break HTML tag!

# Heading Level 1
## Heading Level 2
### Heading Level 3 ..

- Unordered
- List

1. Ordered
2. List

**Bold**
*Italic*

[This is a link](https://airbinski.space)
```
