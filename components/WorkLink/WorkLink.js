import Link from 'next/link'
import React from 'react'
import styles from '../WorkLink/WorkLink.module.css'

function WorkLink({link}) {
  return (
    <>
    <div className={styles.work_link}>
        <p>
        Check this out -<br/>
        <Link href={`${link}`}>{link}</Link>
        
        </p>

    </div>
    </>
  )
}

export default WorkLink