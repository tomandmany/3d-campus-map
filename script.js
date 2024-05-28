import * as THREE from 'three';

let camera, scene, renderer, geometry, material, mesh;

init();
animate();

function init() {
    // シーンを作成
    scene = new THREE.Scene();

    // カメラを作成
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // レンダラーを作成
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // ジオメトリとマテリアルからメッシュを作成
    geometry = new THREE.BoxGeometry();
    material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    // material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    mesh = new THREE.Mesh(geometry, material);

    // シーンにメッシュを追加
    scene.add(mesh);

    // ウィンドウサイズが変更されたときのためにリサイズイベントを設定
    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    requestAnimationFrame(animate);

    // メッシュを回転させる
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    // レンダリング
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
