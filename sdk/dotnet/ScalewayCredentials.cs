// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace ediri.Qovery
{
    /// <summary>
    /// ## # qovery.ScalewayCredentials (Resource)
    /// 
    /// Provides a Qovery SCALEWAY credentials resource. This can be used to create and manage Qovery SCALEWAY credentials.
    /// 
    /// ## Example
    /// 
    /// ```csharp
    /// using System.Collections.Generic;
    /// using System.Linq;
    /// using Pulumi;
    /// using Qovery = ediri.Qovery;
    /// 
    /// return await Deployment.RunAsync(() =&gt; 
    /// {
    ///     var myScalewayCreds = new Qovery.ScalewayCredentials("myScalewayCreds", new()
    ///     {
    ///         OrganizationId = qovery_organization.My_organization.Id,
    ///         ScalewayAccessKey = "&lt;your-scaleway-access-key&gt;",
    ///         ScalewaySecretKey = "&lt;your-scaleway-secret-key&gt;",
    ///         ScalewayProjectId = "&lt;your-scaleway-project-id&gt;",
    ///     }, new CustomResourceOptions
    ///     {
    ///         DependsOn = new[]
    ///         {
    ///             qovery_organization.My_organization,
    ///         },
    ///     });
    /// 
    /// });
    /// ```
    /// 
    /// ## Import
    /// 
    /// ```sh
    ///  $ pulumi import qovery:index/scalewayCredentials:ScalewayCredentials my_scaleway_creds "&lt;organization_id&gt;,&lt;scaleway_credentials_id&gt;"
    /// ```
    /// </summary>
    [QoveryResourceType("qovery:index/scalewayCredentials:ScalewayCredentials")]
    public partial class ScalewayCredentials : global::Pulumi.CustomResource
    {
        /// <summary>
        /// Name of the scaleway credentials.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Id of the organization.
        /// </summary>
        [Output("organizationId")]
        public Output<string> OrganizationId { get; private set; } = null!;

        /// <summary>
        /// Your SCALEWAY access key id.
        /// </summary>
        [Output("scalewayAccessKey")]
        public Output<string> ScalewayAccessKey { get; private set; } = null!;

        /// <summary>
        /// Your SCALEWAY project ID.
        /// </summary>
        [Output("scalewayProjectId")]
        public Output<string> ScalewayProjectId { get; private set; } = null!;

        /// <summary>
        /// Your SCALEWAY secret key.
        /// </summary>
        [Output("scalewaySecretKey")]
        public Output<string> ScalewaySecretKey { get; private set; } = null!;


        /// <summary>
        /// Create a ScalewayCredentials resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ScalewayCredentials(string name, ScalewayCredentialsArgs args, CustomResourceOptions? options = null)
            : base("qovery:index/scalewayCredentials:ScalewayCredentials", name, args ?? new ScalewayCredentialsArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ScalewayCredentials(string name, Input<string> id, ScalewayCredentialsState? state = null, CustomResourceOptions? options = null)
            : base("qovery:index/scalewayCredentials:ScalewayCredentials", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                PluginDownloadURL = "github://api.github.com/dirien/pulumi-qovery",
                AdditionalSecretOutputs =
                {
                    "scalewayAccessKey",
                    "scalewayProjectId",
                    "scalewaySecretKey",
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ScalewayCredentials resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ScalewayCredentials Get(string name, Input<string> id, ScalewayCredentialsState? state = null, CustomResourceOptions? options = null)
        {
            return new ScalewayCredentials(name, id, state, options);
        }
    }

    public sealed class ScalewayCredentialsArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the scaleway credentials.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Id of the organization.
        /// </summary>
        [Input("organizationId", required: true)]
        public Input<string> OrganizationId { get; set; } = null!;

        [Input("scalewayAccessKey", required: true)]
        private Input<string>? _scalewayAccessKey;

        /// <summary>
        /// Your SCALEWAY access key id.
        /// </summary>
        public Input<string>? ScalewayAccessKey
        {
            get => _scalewayAccessKey;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _scalewayAccessKey = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        [Input("scalewayProjectId", required: true)]
        private Input<string>? _scalewayProjectId;

        /// <summary>
        /// Your SCALEWAY project ID.
        /// </summary>
        public Input<string>? ScalewayProjectId
        {
            get => _scalewayProjectId;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _scalewayProjectId = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        [Input("scalewaySecretKey", required: true)]
        private Input<string>? _scalewaySecretKey;

        /// <summary>
        /// Your SCALEWAY secret key.
        /// </summary>
        public Input<string>? ScalewaySecretKey
        {
            get => _scalewaySecretKey;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _scalewaySecretKey = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        public ScalewayCredentialsArgs()
        {
        }
        public static new ScalewayCredentialsArgs Empty => new ScalewayCredentialsArgs();
    }

    public sealed class ScalewayCredentialsState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the scaleway credentials.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Id of the organization.
        /// </summary>
        [Input("organizationId")]
        public Input<string>? OrganizationId { get; set; }

        [Input("scalewayAccessKey")]
        private Input<string>? _scalewayAccessKey;

        /// <summary>
        /// Your SCALEWAY access key id.
        /// </summary>
        public Input<string>? ScalewayAccessKey
        {
            get => _scalewayAccessKey;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _scalewayAccessKey = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        [Input("scalewayProjectId")]
        private Input<string>? _scalewayProjectId;

        /// <summary>
        /// Your SCALEWAY project ID.
        /// </summary>
        public Input<string>? ScalewayProjectId
        {
            get => _scalewayProjectId;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _scalewayProjectId = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        [Input("scalewaySecretKey")]
        private Input<string>? _scalewaySecretKey;

        /// <summary>
        /// Your SCALEWAY secret key.
        /// </summary>
        public Input<string>? ScalewaySecretKey
        {
            get => _scalewaySecretKey;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _scalewaySecretKey = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        public ScalewayCredentialsState()
        {
        }
        public static new ScalewayCredentialsState Empty => new ScalewayCredentialsState();
    }
}
