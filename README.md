# ICF
1. Clone this repository 

     ``` git clone https://github.com/aadarshsingh191198/ICF.git ```
     
2. Install required frameworks 

     ``` npm install ```

3. Download the pre-trained word vectors from the link [here](http://nlp.stanford.edu/data/glove.6B.zip)

4. Extract the downloaded file to a new folder `Embeddings` which itself should be placed inside the parent folder.

5. Clone [this](https://github.com/dhanushsr/Inappropriate-Content-Filter) repository inside parent folder.

     ``` git clone https://github.com/dhanushsr/Inappropriate-Content-Filter.git . ```

6. Run the following command to initialize the model

     ``` python create_embedding_data.py ```
7. To test the appropriateness of a comment run the following command

     ``` python evaluate.py "<Some comment>" ```
