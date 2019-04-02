const fs = require('fs');
const readline = require('readline');
const path = require('path');
const config = {
    "name": "",
    "file": "",
    "schema": {
        login: '',
        passwd: ''
    },
    "numEntries": 0,
    "entries": [],
    "configPresent": false,
    "encoding": "utf-8"
}

class Aural {
    constructor(name, fileName, userSchema) {
        this.config = Object.assign(config)
        this.name = name
        this.file = fileName
        this.schema = Object.assign(config.schema, userSchema)
    }

    writeToFile(str) {
        fs.writeFileSync(this.file, str, (err) => {
            if (err)
                throw error
        })
    }

    removeEntry(index) {
        var file = fs.readFileSync(this.file, this.config.encoding)
        if (file) {
            var entries = JSON.parse(file)
            if (entries.numEntries > 0) {
                entries.entries.splice(index, 1)
                entries.numEntries -= 1
                this.writeToFile(JSON.stringify(entries))
                console.log('Removed entry from ' + this.name + '!')
            } else {
                console.log('No data to remove!')
            }
        }
    }

    init() {
        this.config.file = this.fileName
        this.config.scema = this.schema
        this.config.name = this.name
        if (fs.existsSync(this.file)) {
            if (!fs.readFileSync(this.file, this.config.encoding)) {
                this.config.configPresent = true
                this.writeToFile(JSON.stringify(this.config))
            }
        }
        else {
            var entry = this.config
            entry.configPresent = true
            fs.closeSync(fs.openSync(this.file, 'w'));
            this.writeToFile(JSON.stringify(entry))
        }
    }

    addEntry(entry) {
        var file = fs.readFileSync(this.file, this.config.encoding)
        if (file) {
            var entries = JSON.parse(file)
            if (entries.configPresent) {
                entries.numEntries += 1
                entries.entries.push(entry)
                this.writeToFile(JSON.stringify(entries))
            }
        }
    }

    getAll() {
        var file = fs.readFileSync(this.file, this.config.encoding)

        if (file) {
            var entries = JSON.parse(file)
            if (entries.configPresent) {
                return (entries)
            }
        } else {
            console.log()
        }
    }

    getEntry(i) {
        var file = fs.readFileSync(this.file, this.config.encoding)

        if (file) {
            var entries = JSON.parse(file)
            if (entries.configPresent) {
                if (entries.numEntries >= 1) {
                    return (entries.entries[i])
                } else {
                    console.log('No Entries')
                    return (null)
                }
            }
        } else {
            console.log()
        }
    }

    run(config) {
        var temp = this
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });
        console.log('Initializing empty database...')
        this.init()
        console.log("Press\n'a' to add an entry\n'r' to remove an entry\n'q' or 'exit' to quit")
        rl.on('line', function (line) {
            if (line == 'a')
                temp.addEntry(config)
            else if (line == 'r')
                temp.popEntry(config)
            else if (line == 'exit' || line == 'quit' || line == 'q')
                process.exit(1)
        })
    }

    clear() {
        var file = fs.readFileSync(this.file, this.config.encoding)
        this.writeToFile("")
    }

    numEntries() {
        var file = fs.readFileSync(this.file, this.config.encoding)

        if (file) {
            var entry = JSON.parse(file)
            if (!entry.numEntries) {
                return (0)
            } else {
                return (entry.numEntries)
            }
        }
    }

    listEntries() {
        var file = fs.readFileSync(this.file, this.config.encoding)
        var entry = JSON.parse(file)
        if (file) {
            if (!entry.numEntries)
                console.log('No Entries!')
            else
                console.log(entry.entries)
        }
    }

    help() {
        console.log('Create a new class with:\nvar db = new Aural("name", "fileName.json", schema)\nNote that schema is an object template used as the schematic for the entirety of the Database\n\ndb.init():\nInitialize an empty database\n\ndb.addEntry(entry):\nAdd a JSON object as an entry\n\ndb.getEntry(0):\nGet an Entry at its given index\n\ndb.numEntries():\nGet number of entries\n\ndb.listEntries():\nList all entries\n\ndb.removeEntry(0):\nRemove an entry at its given index\n\ndb.clear():\nClear the JSON file\n')
    }
}

module.exports = Aural;