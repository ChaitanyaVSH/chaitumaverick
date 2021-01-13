import React, { Component } from 'react';
import { Flex, Page, Box, BoxStyle, BoxWidthStyle, BoxBorderStyle } from './layouts/Layout';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Page>
          <Flex lastElRight={false}>
            <Box boxStyle={BoxStyle.doubleSpace}>A simple flexbox</Box>
            <Box boxStyle={BoxStyle.doubleSpace}>Middle</Box>
            <Box>and this goes to the right</Box>
            <Box boxStyle={BoxStyle.noSpace}>No Space</Box>
            <Box boxStyle={BoxStyle.noSpace}>No Space</Box>
            <Box boxStyle={BoxStyle.doubleSpace}>End</Box>
          </Flex>


          <Flex lastElLeft={true} marginTop={false}>
            <Box boxWidth={BoxWidthStyle.default}>
              <p>This goes to the left only and default width</p>
              <div>
                <h2>This is heading 2, which is fitting inside and does not come out.</h2>
                <input></input>
                <br></br>
                <input></input>
                <h2>This is heading 2, which is fitting inside and does not come out.</h2>
                <h2>This is heading 2, which is fitting inside and does not come out.</h2>
              </div>
            </Box>
          </Flex>

          <Flex lastElLeft={true} marginTop={false}>
            <Box boxWidth={BoxWidthStyle.mediumWidth}>
              <h3>This box has same content as above but somewhat wider</h3>
              <div>
                <h2>This is heading 2, which is fitting inside and does not come out.</h2>
                <input></input>
                <br></br>
                <input></input>
              </div>

              <div>
                <h2>This is heading 2, which is fitting inside and does not come out.</h2>
                <input></input>
                <br></br>
                <input></input>
              </div>
            </Box>
          </Flex>


          <Flex lastElLeft={true} marginTop={true}>
            <Box boxWidth={BoxWidthStyle.largeWidth}>and this goes to the left, bottom and medium width</Box>
          </Flex>

          <Flex>
            <Box boxWidth={BoxWidthStyle.largeWidth} boxStyle={BoxBorderStyle.thick}>
              This is the bigger box
            </Box>
          </Flex>
        </Page>
      </div>
    )
  }
}

export default App
