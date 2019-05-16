# ngx-schematics

Overpowered angular schematics for hyperwork.

## Tutorial: Getting Started 

 Switch to the folder ``src\app`` and create a sub-folder ``hotel`` with a file ``model.json``. Put the following content into this file:

    ```
    { 
        "title": "Hotel",
        "entity": "hotel",
        "api": {
          "url": "http://www.angular.at/api/hotel"
        },
        "filter": [
          "city"
        ],
        "fields": [
          {
            "name": "id",
            "label": "Id",
            "isId": true,
            "readonly": true,
            "type": "number"
          },
          {
            "name": "name",
            "type": "string",
            "label": "Name"
          },
          {
            "name": "city",
            "type": "string",
            "label": "City"
          },
          {
            "name": "stars",
            "type": "string",
            "control": "number",
            "label": "Stars"
          } 
        ]
    }
    ```
