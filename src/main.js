{/* <div class="images__car">
    <img src="" alt="img">
    <p>Nombre</p>
    <p>Modelo</p>
</div> */}

class car {
    constructor(img, name, model) 
    {
        this.image = img,
        this.name = name,
        this.model = model
    }
}

const container = document.querySelector('.gallery__images');

const cars = [];
cars.push(new car('https://i.pinimg.com/564x/1d/98/55/1d9855bb30511efb885986eab1610196.jpg', 'Ferrari Purosangue', 2022));
cars.push(new car('https://i.pinimg.com/564x/e9/58/25/e95825c8593a384b36f4055751abbcab.jpg', 'Corvette Stringray', 2023));
cars.push(new car('https://i.pinimg.com/564x/e0/ad/63/e0ad634feee6048bc9fb6046ae6c56e8.jpg', 'Aston Martin Vantage', 2022));
cars.push(new car('https://i.pinimg.com/564x/10/5b/14/105b1445a3b5654dc39f8ff2383db2fd.jpg', 'Maserati Grecale Folgore', 2024));
cars.push(new car('https://i.pinimg.com/564x/3d/c6/79/3dc679e544f946ca571a77a890e661c0.jpg', 'Toyota GR Supra', 2023));
cars.push(new car('https://i.pinimg.com/564x/1e/28/c0/1e28c0751d5f196fa429683748bd2ffd.jpg', 'Nissan V-Drive', 2023));
cars.push(new car('https://i.pinimg.com/564x/96/5f/32/965f32aa91ac646ae0da2e57cf9f9e6a.jpg', 'Tesla Roadster', 2023));
cars.push(new car('https://i.pinimg.com/564x/51/17/af/5117afb1868b519d320198fa544fb3ed.jpg', 'McLaren 765LT Spider', 2022));
cars.push(new car('https://i.pinimg.com/564x/0b/42/3d/0b423d3c230e0cc20d7f744dfab6d823.jpg', 'Lamborghini Aventador', 2023));
cars.push(new car('https://i.pinimg.com/564x/31/ff/d7/31ffd77ecb6dd4890b9658dd293b04ff.jpg', 'BMW Serie 3 Berlina', 2022));

function createELementsCars (src, n, m) {
    const imgCarContainer = document.createElement('div');
    imgCarContainer.classList.add('images__car');

    const img = document.createElement('img');
    img.setAttribute('alt', n);
    img.setAttribute('src', src);
    const name = document.createElement('p');
    name.innerText = n;
    const model = document.createElement('p');
    model.innerText = m;

    imgCarContainer.appendChild(img);
    imgCarContainer.appendChild(name);
    imgCarContainer.appendChild(model);

    container.appendChild(imgCarContainer);
}

cars.forEach(item => {
    createELementsCars(item.image, item.name, item.model);
})