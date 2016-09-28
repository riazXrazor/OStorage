# OStorage
Storing access JSON/objects in localStorage a little bit easier
Its quite simple to use
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>OStorage</title>
  </head>
  <body>

  <script src="OStorage.js" charset="utf-8"></script>
  <script type="text/javascript">
    var ls = new OStorage('riaz');
    var data = ls.get();
    if(!data)
    {
      data = ls.create(['a','b','c']);
    }
    console.log('old',data);
    data.push("d")
    ls.update(data);
    console.log('new',ls.get());

    // get all items in localStorage as OStorage object array
    console.log(ls.getAllAsObject());

    var ne = new OStorage('test');
    var data = ne.get();
    if(!data)
    {
      data = ne.create(['1','2','3']);
    }
    console.log(data);

  </script>
  </body>
</html>

