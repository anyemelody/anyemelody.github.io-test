<a-scene physics>
  for (var i=0; i<10; i++){
    <a-sphere position="-1 4 -3" radius="1" color="red" dynamic-body></a-sphere>
    <a-sphere position="0 6 -3" radius="0.5" color="yellow" dynamic-body></a-sphere>
  }
  <a-plane position="0 0 -4" rotation="-90 0 0" width="10" height="10" color="#7BC8A4" static-body></a-plane>
  <a-sky color="#ECECEC"></a-sky>
</a-scene>
