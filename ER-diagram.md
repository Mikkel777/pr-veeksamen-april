# ER diagram

## Oversikt
Dette ER diagrammet beskriver databasen for et turneringssystem.

## Entiteter og attributter

# Bruker
- bruker_id (PK)
- username
- password
- rolle (admin, lagleder, deltaker)


# Lag
- lag_id (PK)
- navn
- lagleder_id (FK - Bruker.bruker_id)


# Deltaker
- deltaker_id (PK)
- navn
- alder
- lag_id (FK - Lag.lag_id)


# Turnering
- turnering_id (PK)
- navn
- startdato


# Kamp
- kamp_id (PK)
- lag1_id (FK - Lag.lag_id)
- lag2_id (FK - Lag.lag_id)
- tidspunkt
- resultat
- turnering_id (FK - Turnering.turnering_id)


## Relasjoner

- En bruker kan være lagleder for ett lag  
- Et lag har mange deltakere  
- En turnering har mange kamper  
- En kamp består av to lag  
- En kamp tilhører en turnering  


## Kardinalitet

- Bruker (1) - (0..1) Lag  
- Lag (1) - (M) Deltaker  
- Turnering (1) - (M) Kamp  
- Lag (1) - (M) Kamp  


## Notater

- Primærnøkler (PK) identifiserer unike rader  
- Fremmednøkler (FK) kobler tabeller sammen  
- Systemet er designet for å unngå duplisering av data (normalisering)  


## Personvernhensyn

- Kun nødvendige data lagres (navn og alder)  
- Fødselsdato lagres ikke  
- Passord lagres kryptert  
- Tilgang styres gjennom roller  
