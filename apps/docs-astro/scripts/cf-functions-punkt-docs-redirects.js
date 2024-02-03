/*
 * AWS CloudFront function that controls redirects for the Punkt docs
 *
 * - redirect to specific version by setting location header
 * - redirect requests to index.html in S3
 */

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  // var version = uri.match(/\/\d+\.\d+\.\d+$/g); // /0.0.1
  var version = uri.match(/\/\d+\.\d+$/g); // /0.1
  var isSemverEnding = version && version.length == 1;
  var uriInParts = uri.split("/");
  var lastUriPart = uri.length > 0 && uriInParts[uriInParts.length - 1];
  var notAFile = lastUriPart && !lastUriPart.includes(".");

  // Following 3 lines are updated from build script, do not modify!
  // START VERSION
  var nextMajorMinor = "/x.x/";
  // END VERSION

  // /latest/ -> /latest/index.html
  // /0.0.1/ -> /0.0.1/index.html
  if (uri.endsWith("/") && uri.length > 1) {
    request.uri += "index.html";
  }

  // / -> /latest/
  else if (uri === "/" || uri == "") {
    var response = {
      statusCode: 302,
      statusDescription: "Found",
      headers: {
        location: {
          value: nextMajorMinor,
        },
      },
    };
    return response;
  }

  // /0.1 || /latest || /asdf-asdf -> /0.1/ || /latest/ || /asdf-asdf
  // In other words: redirect to the if-case above
  else if (isSemverEnding || notAFile) {
    var response = {
      statusCode: 302,
      statusDescription: "Found",
      headers: {
        location: {
          value: request.uri + "/",
        },
      },
    };
    return response;
  }

  return request;
}
