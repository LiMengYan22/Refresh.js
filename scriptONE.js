// en un elemento html:
onclick="window.location.reload()"

// el script:
<script type="text/javascript">
var int=self.setInterval("refresh()",600);
function refresh()
{
location.reload(true);
}
</script>
