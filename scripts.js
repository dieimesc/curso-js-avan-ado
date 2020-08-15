const listElement = document.querySelector('#list');
const searchInput = document.querySelector('#search');
const languageSelected = document.querySelector('#language-tags');

let languageTag = 'en-US';


let listItems = [
    {
        full_name: 'JavaScript',
        created_at: '2020-08-12T12:00',
        forks: 1280
    },
    {
        full_name: 'JavaScript',
        created_at: '2020-08-12T12:00',
        forks: 1280
    },
    {
        full_name: 'JavaScript',
        created_at: '2020-08-12T12:00',
        forks: 1280
    },

]

languageSelected.addEventListener('change', changeLanguage);

function changeLanguage(){
    languageTag = languageSelected.value;
    render();
}

function render() {
    let html = '';
    const numberFormatter = Intl.NumberFormat(languageTag);
    const dateFormatter = Intl.DateTimeFormat(languageTag, 
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'

        });

    listItems.forEach((item) => {
        const forks = numberFormatter.format(item.forks);
        const createdAt = dateFormatter.format(new Date(item.created_at));

        html += `<li>
            <div>
                <b>Name</b> ${item.full_name}
            </div>
            <div>
                <b>Create At:</b> ${createdAt}
            </div>
            <div>
                <b>Forks</b> ${forks} 
            </div>        
        </li>    `;});
    listElement.innerHTML = html;
}
render();