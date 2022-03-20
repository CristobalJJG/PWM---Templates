const loadProduct = async function(){
    await $.getJSON("/data/objetosEmpresa.json", function(json){
        Object.entries(json.Productos).forEach((entry) => {
            const [key, p] = entry;
            console.log(p);

            const div = document.createElement('div');
            const a = document.createElement('a');
            const img = document.createElement('img');
            const div2 = document.createElement('div');
            const h2 = document.createElement('h2');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
    
            div.setAttribute('class', 'imagen');
                a.setAttribute('href', "/web/Compra/ComprarObjeto/objEmpresa.html?id="+p.id);
                img.setAttribute('href', p.mainPhoto);
                div2.setAttribute('class', 'content');
                    h2.textContent = p.nombre;
                    p1.textContent = p.descripcion;
                    p2.setAttribute('id', p.id)
                    p2.textContent = p.precio;
    
            div.appendChild(a);
            a.appendChild(img);
            a.appendChild(div2);
            div2.appendChild(h2);
            div2.appendChild(p1);
            div2.appendChild(p2);
            var sec = document.getElementById('productos');
            sec.appendChild(div);
        })
    })
} 

loadProduct();