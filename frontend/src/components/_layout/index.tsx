import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from '@mui/material'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Container maxWidth="xl">
                <Header />
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default PageLayout