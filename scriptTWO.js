// en un anchor html:
<a..
onload='refresh()'

// el siguiente script:
<script type="text/javascript">
var int=self.setInterval("refresh()",300);
function refresh()
{
location.reload(true);
}
</script>
