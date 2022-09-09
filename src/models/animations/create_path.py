import os, json

directory = 'src/models/animations'
path = os.path.abspath(os.path.dirname(__file__))

results = [ f"{path}\{file}" for idx, file in enumerate(filter(lambda x: ".fbx" in x, os.listdir(directory)))]

with open(f"{directory}/animationPath.py", "w") as f:
    f.write(json.dumps(results, indent=4))