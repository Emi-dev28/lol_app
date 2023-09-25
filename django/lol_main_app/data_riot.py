from riotwatcher import LolWatcher
import json
import requests


key_riot="RGAPI-fcdbf977-db44-4158-b9a0-4b8b5d89749f"
lol_watcher = LolWatcher(api_key=key_riot)  # api

def r(user):
    region = "la2"
    data_usuario = lol_watcher.summoner.by_name(region,summoner_name=user)
    partidas = lol_watcher.match.matchlist_by_puuid(region,data_usuario['puuid'])
    f = lol_watcher.match.by_id(region,partidas[0])
    f_json = json.dumps(f)
    parsed_data = json.loads(f_json)
    
    info = parsed_data['info']
    dic = {}
    for key, value in info.items():
        if key == 'gameId':
            dic = {key:value}
    return(dic)


def champ(user):
    region = "la2"
    list_champ_tier = []
    data_usuario = lol_watcher.summoner.by_name(region,summoner_name=user)
    champ = lol_watcher.champion_mastery.by_summoner(region,data_usuario['id'])    
    champ_json = json.dumps(champ)
    parsed_champ = json.loads(champ_json)
    champ_id = [parsed_champ[0]['championId'],parsed_champ[1]['championId'],parsed_champ[2]['championId']]

    with open("champid.json",'r') as champidlist:
        champid_json = json.load(champidlist)
        for nombre, identificador in champid_json.items():
            for ids in champ_id:
                if identificador == ids:
                    list_champ_tier.append(nombre)
    if len(list_champ_tier)>0:
        return list_champ_tier


def ayuda(user):
    region = "la2"
    data_usuario = lol_watcher.summoner.by_name(region,summoner_name=user)
    f_json = json.dumps(data_usuario)
    parsed_data = json.loads(f_json)
    return(parsed_data)

print(ayuda("ivanchoakd"))
