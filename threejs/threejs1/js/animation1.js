let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);


        //square
        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);

        // TorusKnotGeometry



        //material
        let material = new THREE.MeshBasicMaterial({
            color: 0xF0118F,
            wireframe: true
        });

        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 17;


        //rota Logic
        let update = function () {
            cube.rotation.x -= 0.03;
            cube.rotation.y += 0.005;


        };
        //drow Scene
        let render = function () {
            renderer.render(scene, camera);
        };

        //run Loop(updade, render, repeat)
        let GameLoop = function () {
            requestAnimationFrame(GameLoop);
            update();
            render();

        };
        GameLoop();