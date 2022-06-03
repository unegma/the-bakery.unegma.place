import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';

// const DECODER_PATH="../node_modules/three/examples/js/libs/draco/gltf/";
const DECODER_PATH="https://www.gstatic.com/draco/versioned/decoders/1.4.1/";

// todo better to use glb
// const spaceURL = 'https://assets.unegma.net/relicsof.earth/cafe.glb'; // todo may need draco loader https://assets.unegma.net/ark.unegma.work/cafe.gltf
const spaceURL = `${process.env.REACT_APP_ASSETS_URL}/the-bakery-compressed.gltf`; // todo may need draco loader https://assets.unegma.net/ark.unegma.work/cafe.gltf

/**
 * From this example:
 * @constructor
 */
export default function Space() {
  const { nodes, materials }: any = useLoader(GLTFLoader, spaceURL, loader => {
    const useDraco = true;
    if (useDraco) {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderConfig({type: 'js'});
      dracoLoader.setDecoderPath(DECODER_PATH);
      console.log(dracoLoader)
      // @ts-ignore
      loader.setDRACOLoader(dracoLoader);
    }
  });
  console.log(nodes,materials);

  return (
    <>
      <mesh material={materials['material_0.003']} geometry={nodes.Mesh_0003.geometry} />
      <mesh material={materials['material_0']} geometry={nodes.Mesh_0003_1.geometry} />
      <mesh material={materials['material_0.001']} geometry={nodes.Mesh_0003_2.geometry} />
      <mesh material={materials['material_0.002']} geometry={nodes.Mesh_0003_3.geometry} />
    </>
  )
}
