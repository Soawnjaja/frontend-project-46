### Hexlet tests and linter status:
[![Actions Status](https://github.com/Soawnjaja/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Soawnjaja/frontend-project-46/actions)
### Test Coverage and Maintainability
[![Test Coverage](https://api.codeclimate.com/v1/badges/6119ce4ec7f0c8e13465/test_coverage)](https://codeclimate.com/github/Soawnjaja/frontend-project-46/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/6119ce4ec7f0c8e13465/maintainability)](https://codeclimate.com/github/Soawnjaja/frontend-project-46/maintainability)


## This CLI generate difference between two files json, yaml/yml format.

### SYNOPSIS

       gendiff [option] filepath1 filepath2

### DESCRIPTION

       Compares two configuration files and shows a difference.
       -f, --format <type> There are three possible formats: stylish (default), plain and json.
       Supported file extensions: json, yaml/yml.
### SYSTEM REQUREMENTS:

      Node 14.x version at least

### HOW TO INSTALL:

      # clone this repository on your machine with SSH key
      $git clone git@github.com:Soawnjaja/frontend-project-46.git

      #move to dir
      $cd directory-name

      # run the one of these command to install all necessary dependencies
      $make install
      or
      $npm ci

      # this command is responsible for linking commands from package.json to "./bin" directory
      $npm link

      # run utility
      $ gendiff <filepath1> <filepath2>

      # run help 
      $ gendiff -h     

### PREVIEW

1. Difference calculation between two flat JSON files. 
[![asciicast](https://asciinema.org/a/aTHTTYN3EYIoKmgb72jblr2rl.svg)](https://asciinema.org/a/aTHTTYN3EYIoKmgb72jblr2rl)

2. Difference calculation between two JSON files, default format (stylish).
[![asciicast](https://asciinema.org/a/M0gyH34VFx7iQSBou4FMmrWIJ.svg)](https://asciinema.org/a/M0gyH34VFx7iQSBou4FMmrWIJ)

3. Difference calculation between two YAML files, format plain.
[![asciicast](https://asciinema.org/a/SNq4hJv8fqFkF6pApncZ2XCrc.svg)](https://asciinema.org/a/SNq4hJv8fqFkF6pApncZ2XCrc)

4. Difference calculation between two YAML files, format json.
[![asciicast](https://asciinema.org/a/0mkbqVTX43qFjrhX3tgZkU5tA.svg)](https://asciinema.org/a/0mkbqVTX43qFjrhX3tgZkU5tA)