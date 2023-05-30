import json

# Nome do ficheiro da base de dados que quero alterar
nome_arquivo = "db.json"

######### LEITURA DO FICHEIRO 
with open(nome_arquivo, "r") as file:
    data = json.load(file)

######### Acrescentar o _id a cada registo da base de dados
for item in data:
    identifier = item["Id"]
    item.pop("Id")
    item["_id"] = str(identifier)

##### Escrita novamente no ficheiro
json_string = json.dumps(data, indent=2)


with open(nome_arquivo, "w") as file:
    file.write(json_string)
