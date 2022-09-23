import * as React from "react"
import Layout from "../components/layout"
import { ChakraProvider } from '@chakra-ui/react'
const IndexPage = () => (
  <ChakraProvider>
    <Layout/>
  </ChakraProvider>
)

export default IndexPage
