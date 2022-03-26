const loadProduct = async function() {
    await $.getJSON("/data/ObjetosGeneral/objetosParticular.json", function(json) {
        Object.entries(json.Productos).forEach((entry) => {
            const [key, p] = entry;
            console.log(p);

            const div = document.createElement('div');
            div.setAttribute('class', 'imagen');

            const a = document.createElement('a');
            a.setAttribute('href', "/web/Compra/ComprarObjeto/objParticular.html?id=" + p.id);

            const img = document.createElement('img');
            img.setAttribute('src', p.mainPhoto);

            const div2 = document.createElement('div');
            div2.setAttribute('class', 'content');

            const h2 = document.createElement('h2');
            h2.setAttribute('id', "objeto" + p.id)
            h2.setAttribute('class', "objeto")
            h2.textContent = p.nombre;

            const p2 = document.createElement('p');
            p2.setAttribute('id', p.id);
            p2.setAttribute('class', "precio");
            p2.textContent = p.precio + "€";

            const p1 = document.createElement('p');
            p1.setAttribute('class', "descripcion")
            p1.textContent = p.descripcion;

            div.appendChild(a);
            a.appendChild(img);
            a.appendChild(div2);
            div2.appendChild(h2);
            div2.appendChild(p2);
            div2.appendChild(p1);

            var sec = document.getElementById('productos');
            sec.appendChild(div);
        })
    })
}

loadProduct();