#!/usr/bin/bash
filename="$1"
while read -r line
do
    name="$line"
    echo "Name read from file - $name"
    apikey="AIzaSyCyR6ocPdMRvKh_z2LGExYBPM22mew4ltA"
    curl -H "Content-Type: application/json" --data '{comment: {text: "'"$name"'"},    languages: ["en"],   requestedAttributes: {TOXICITY:{}} }'  https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=$apikey | jq -r '.attributeScores.TOXICITY.summaryScore.value' >>  somescore.csv

    echo "$name" >> some.csv
done < "$filename"
