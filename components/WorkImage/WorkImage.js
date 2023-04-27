import Image from 'next/image'
import React from 'react'
import styles from '../WorkImage/WorkImage.module.css'

function WorkImage({image_src}) {
  return (
    <div className={styles.work_image_container}>
        <Image src={image_src} width={600} height={300}/>
    </div>
  )
}

export default WorkImage