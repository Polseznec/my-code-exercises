var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);


        //square
        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);



        //material
        var material = new THREE.MeshBasicMaterial({
            color: 0xFF11FF,
            wireframe: true
        });

        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 17;


        //Logic

        var update = function () {
            cube.rotation.x -= 0.03;
            cube.rotation.y += 0.005;


        };

        //drow Scene
        var render = function () {
            renderer.render(scene, camera);
        };

        //run Loop(updade, render, repeat)

        var GameLoop = function () {
            requestAnimationFrame(GameLoop);

            update();
            render();

        };


       
        GameLoop();