/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {
  Container,
} from '@chakra-ui/react';
import Navbar from "./template/Navbar";
import Header from "./template/Header";
import Footer from "./template/Footer";
import BackImage from "./template/BackImage";
import ProductPeople from "./template/ProductPeople";
import OurCommits from "./template/OurCommits";
import CardPeople from "./template/CardPeople";
import PlugRun from "./template/PlugRun";

const Layout = ({ children }) => {
  return (
    <>
      <Container maxW={'6xl'} zIndex={10} position={'relative'} >
       <Navbar /> 
       <Header/>
       <PlugRun/>
       <CardPeople/>
       <OurCommits/>
       <ProductPeople/>
       <BackImage/>
       <Footer/>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
