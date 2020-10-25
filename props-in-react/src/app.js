import React from 'react';
import Card from './card'

/*
you can pass arguments to your components in two different ways:

- 1º -> passing it like the normal parameter in a tag
    <div>
        <Card
            name="something"
            imgUrl="https://image/to/be/uploaded"
        />
        <Card
            name="other someone"
            imgUrl="https://image/to/be/uploaded"
        />
    </div>

- 2ª -> passing an object with all the content in it
    <div>
        <Card
            contact={{name: "something", imgUrl: "https://image/to/be/uploaded"}}
        />
        <Card
            name="other someone"
            imgUrl="https://image/to/be/uploaded"
        />
    </div>
*/

const App = () => (
    <div className='big-card'>
        <Card content = {{ name: 's', something: 'something', imgUrl: 'https://yt3.ggpht.com/a/AATXAJzQ4oR-CvP4m9amSE0konQjoszdjXYaZmBHX2F-=s900-c-k-c0x00ffffff-no-rj'}}/>
        <Card content = {{ name: 'o', something: 'something', imgUrl: 'https://lh3.googleusercontent.com/proxy/UvBlKoFTRvUreiKvFbaIAgACN5GfP1IimecE0GXpiIRKZ-0iE65Pxmh64J5s2U7pYr5bS9MB5k3VKipJy6FxV7r2ZUvjuFU7uQI1RRcTAjevdEKUceQ9z_uV3rCrBi8SkJ1wY5ot6YZidw'}}/>
        <Card content = {{ name: 'm', something: 'something', imgUrl: 'https://i.pinimg.com/originals/30/9d/fd/309dfd0ffceab3e6997761e7ee09eaab.jpg'}}/>
        <Card content = {{ name: 'e', something: 'something', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MO-supp-E.svg/1200px-MO-supp-E.svg.png'}}/>
        <Card content = {{ name: 'o', something: 'something', imgUrl: 'https://lh3.googleusercontent.com/proxy/UvBlKoFTRvUreiKvFbaIAgACN5GfP1IimecE0GXpiIRKZ-0iE65Pxmh64J5s2U7pYr5bS9MB5k3VKipJy6FxV7r2ZUvjuFU7uQI1RRcTAjevdEKUceQ9z_uV3rCrBi8SkJ1wY5ot6YZidw'}}/>
        <Card content = {{ name: 'n', something: 'something', imgUrl: 'https://www.bma.art.br/wp-content/uploads/2018/09/Letra-n.jpg'}}/>
        <Card content = {{ name: 'e', something: 'something', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MO-supp-E.svg/1200px-MO-supp-E.svg.png'}}/>
    </div>
)

export default App