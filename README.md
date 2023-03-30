

# Unfolder
   This is a simple command-line interface (CLI) tool that moves all files from subdirectories to the top level of a directory.
   ## Installation
   To use this tool, you'll need to have Node.js and NPM installed on your system. You can download it from the official website: https://nodejs.org/
    Once you have Node.js (NPM comes bundled with Node) installed, you will be able to use this tool via npx command. To install the tool on your system run:
```
npm i unfolder -g
```

   
   If you don't want the tool installed globally on your system you can also download the tool by cloning this repository or downloading the source code as a ZIP file.
## Usage
To use the tool, open a terminal and run the following command:
```
npx unfolder [directoryPath]
```
    
    
  Replace `[directoryPath]` with the path to the directory you want to move files from. If you don't provide a directory path, the tool will use the current directory.
    The tool will move all files from subdirectories to the top level of the directory. It will output a message for each file that is moved.

   To use the tool without installing globally, open a terminal or command prompt and navigate to the directory where the tool is installed. Then, run the following command:
    ```
    ./unfolder.js [directoryPath]
    ```

## License
This tool is licensed under the MIT License


