'use client'

import {Template, ImageCard, Button, InputText} from '@/components'
import { Image } from '@/resources/Image/image.resources'
import { useImageService } from '@/resources/Image/image.service'
import {useState} from 'react'
import Link from 'next/link'

export default function GaleriaPage(){

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([])
    const [query, setQuery] = useState<string>('')
    const [extension, setExtension] = useState<string>('') 
    const [loading, setLoading] = useState<boolean>(false);

    async function searchImages(){
        setLoading(true)
        const result = await useService.buscar(query, extension)
        setImages(result);
        setLoading(false)
        console.table(result)
    }

    function renderImageCard(image : Image){
        return(
            <ImageCard key={image.url} 
                       nome={image.nome} 
                       src={image.url} 
                       tamanho={image.size} 
                       extension={image.extension}
                       dataUpload={image.uploadDate}/>
        )
    }

    function renderImageCards(){
        return images.map(renderImageCard)
    }

    return(
        <Template loading={loading}>
            <section className='flex flexx-col items-center justify-center my-5'>
                <div className='flex space-x-4'>
                    <InputText placeholder='Digite nome ou tag' onChange={event => setQuery(event.target.value)}/>
                    <select onChange={event => setExtension(event.target.value)} 
                            className='border px-4 py-2 rounded-lg text-gray-900'>
                        <option value="">Todos os formatos</option>
                        <option value="PNG">PNG</option>
                        <option value="JPEG">JPEG</option>
                        <option value="GIF">GIF</option>
                    </select>
                    <Button style="bg-blue-500 hover:bg-blue-300" label='Buscar' onClick={searchImages}/>
                    <Link href="/formulario">
                       <Button style="bg-yellow-500 text white px-4 py-2 rounded-lg hover:bg-yellow-300" label='Adicionar nova imagem'/>
                    </Link>
                </div>
            </section>
            
            <section className='grid grid-cols-4 gap-8'>
            {
                renderImageCards()
            }
            </section>
        </Template>
    )
}