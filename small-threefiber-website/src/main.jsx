import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import * as THREE from 'react-three-fiber'


function main() {

  const scene = new THREE.scene();

  const geometry = new THREE.SphereGeometry(3,80,80)
  const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
  })

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh)

  //caméra
  const camera = THREE.PerspectiveCamera(45, 800, 600)
  scene.add(camera)


  //render la view

  const canvas = document.querySelector('.webgl');
  const renderer = new THREE.WebGLRenderer({canvas})
  renderer.setSize(800,600)
  renderer.render(scene, camera)




  return (
    <div>main</div>
  )
}

export default main