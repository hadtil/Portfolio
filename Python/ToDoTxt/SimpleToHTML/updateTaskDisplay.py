
output_page_title = "Current ToDos"
output_src_indent = "    "
settings_filename = "..\\..\\settings-todos-location.txt"


def filePreamble(outputfile, pageTitle):
    outputfile.write('<!DOCTYPE html>' + '\n')
    outputfile.write('<html lang="en">' + '\n')
    outputfile.write('<head>' + '\n')
    outputfile.write(output_src_indent + '<meta charset="UTF-8">' + '\n')
    outputfile.write(output_src_indent + '<meta name="viewport" content="width=device-width, initial-scale=1.0">' + '\n')
    outputfile.write(output_src_indent + '<title>' + pageTitle + '</title>' + '\n')
    outputfile.write(output_src_indent + '' + '\n')
    outputfile.write(output_src_indent + '<!-- Refresh the page -->' + '\n')
    outputfile.write(output_src_indent + '<meta http-equiv="refresh" content="5">' + '\n')
    outputfile.write(output_src_indent + '' + '\n')
    outputfile.write('</head>' + '\n')
    outputfile.write('<body>' + '\n')
    outputfile.write('' + '\n')

def fileConclusion(outputfile, scriptFilename):
    outputfile.write('' + '\n')
    outputfile.write(output_src_indent + '<script src="' + scriptFilename + '"></script>' + '\n')
    outputfile.write('' + '\n')
    outputfile.write('</body>' + '\n')
    outputfile.write('</html>' + '\n')
    
f = open(settings_filename, "r")

todotasks_filename = f.readline().strip()
todotasks_outputfile = f.readline().strip()
print(todotasks_filename)
print(todotasks_outputfile)
f.close()

inputfile = open(todotasks_filename, "r")
# listOfEntries = inputfile.readlines()
listOfEntries = inputfile.read().splitlines()  # Get rid of trailing newlines

outputfile = open(todotasks_outputfile, 'w')
filePreamble(outputfile, output_page_title)

for element in listOfEntries:
    outputfile.write(output_src_indent + element + '</br>' + '\n')

fileConclusion(outputfile, "")
inputfile.close()
outputfile.close()


    