let theme = localStorage.getItem('theme')

if (theme == null)
{
    setTheme('light')
}
else
{
    setTheme(theme)
}

let themeDots =document.getElementsByClassName('theme-dot')//this is grabbing theme-dot from html

for(var i=0; themeDots.length > i; i++)
{
    themeDots[i].addEventListener('click', function()
    {
        let mode = this.dataset.mode
        console.log('Option clicked', mode) 
        setTheme(mode)
    })//this function is making sure that the buttons are working and 'mode' is changing color of theme according to theme-dot we select
}

function setTheme(mode)//this function is condition for changing the theme which changes the css file
{
    if (mode == 'light')
    {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == 'blue')
    {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green')
    {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple')
    {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme' , mode) // this line is helping me to store users selected color even after the page is refreshed!! 
}