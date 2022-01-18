# Python Utility 
## Read any folder and write all the filenames to a CSV file with the label 
## FileName, Label

You need this kind of csv files often for training.


                import os
                FOLDER_TO_READ = "/content/sample_data/train/"
                LABEL = "MY_LABEL"
                for root, dirs, files in os.walk("YOUR_DIRECTORY_NAME"):
                    with open('.\imageFile.csv', 'a') as the_file:
                        for fileName in files:
                            FileName = FOLDER_TO_READ + fileName
                            the_file.write( FileName + ", LABEL\n")
                    
                print ('done')   
                