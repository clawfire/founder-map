this["foundermap"] = this["foundermap"] || {};
this["foundermap"]["templates"] = this["foundermap"]["templates"] || {};
this["foundermap"]["templates"]["founderTable"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <tr>\n      <td data-title=\"Select\"><input type=\"checkbox\" name=\"company\" value=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"></td>\n      <td data-title=\"Commany name\">"
    + escapeExpression(((helper = (helper = helpers.company_name || (depth0 != null ? depth0.company_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"company_name","hash":{},"data":data}) : helper)))
    + "</td>\n      <td data-title=\"Founder\">"
    + escapeExpression(((helper = (helper = helpers.founder || (depth0 != null ? depth0.founder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"founder","hash":{},"data":data}) : helper)))
    + "</td>\n      <td data-title=\"Country\">"
    + escapeExpression(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"country","hash":{},"data":data}) : helper)))
    + "</td>\n      <td data-title=\"City\">"
    + escapeExpression(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"city","hash":{},"data":data}) : helper)))
    + "</td>\n      <td data-title=\"Zip\">"
    + escapeExpression(((helper = (helper = helpers.postal_code || (depth0 != null ? depth0.postal_code : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"postal_code","hash":{},"data":data}) : helper)))
    + "</td>\n      <td data-title=\"Street Adress\">"
    + escapeExpression(((helper = (helper = helpers.street || (depth0 != null ? depth0.street : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"street","hash":{},"data":data}) : helper)))
    + "</td>\n      <td data-title=\"HomePage\"><a href=\""
    + escapeExpression(((helper = (helper = helpers.home_page || (depth0 != null ? depth0.home_page : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"home_page","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.company_name || (depth0 != null ? depth0.company_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"company_name","hash":{},"data":data}) : helper)))
    + "'s Homepage\">"
    + escapeExpression(((helper = (helper = helpers.home_page || (depth0 != null ? depth0.home_page : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"home_page","hash":{},"data":data}) : helper)))
    + "</a></td>\n      <td data-title=\"Image\"><a href=\""
    + escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo","hash":{},"data":data}) : helper)))
    + "\" title=\"click to enlarge the picture\"><img src=\""
    + escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.company_name || (depth0 != null ? depth0.company_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"company_name","hash":{},"data":data}) : helper)))
    + "'s picture\"></a></td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table>\n  <thead>\n    <th>Select</th>\n    <th>Company name</th>\n    <th>Founder</th>\n    <th>Country</th>\n    <th>City</th>\n    <th>Zip</th>\n    <th>Street Adress</th>\n    <th>HomePage</th>\n    <th>Image</th>\n  </thead>\n  <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.company : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </tbody>\n</table>\n";
},"useData":true});