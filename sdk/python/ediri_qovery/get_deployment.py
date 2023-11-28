# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = [
    'GetDeploymentResult',
    'AwaitableGetDeploymentResult',
    'get_deployment',
    'get_deployment_output',
]

@pulumi.output_type
class GetDeploymentResult:
    """
    A collection of values returned by getDeployment.
    """
    def __init__(__self__, desired_state=None, environment_id=None, id=None, version=None):
        if desired_state and not isinstance(desired_state, str):
            raise TypeError("Expected argument 'desired_state' to be a str")
        pulumi.set(__self__, "desired_state", desired_state)
        if environment_id and not isinstance(environment_id, str):
            raise TypeError("Expected argument 'environment_id' to be a str")
        pulumi.set(__self__, "environment_id", environment_id)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if version and not isinstance(version, str):
            raise TypeError("Expected argument 'version' to be a str")
        pulumi.set(__self__, "version", version)

    @property
    @pulumi.getter(name="desiredState")
    def desired_state(self) -> str:
        return pulumi.get(self, "desired_state")

    @property
    @pulumi.getter(name="environmentId")
    def environment_id(self) -> str:
        return pulumi.get(self, "environment_id")

    @property
    @pulumi.getter
    def id(self) -> str:
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def version(self) -> Optional[str]:
        return pulumi.get(self, "version")


class AwaitableGetDeploymentResult(GetDeploymentResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDeploymentResult(
            desired_state=self.desired_state,
            environment_id=self.environment_id,
            id=self.id,
            version=self.version)


def get_deployment(id: Optional[str] = None,
                   version: Optional[str] = None,
                   opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetDeploymentResult:
    """
    ## # Deployment (Data Source)

    Provides a Qovery deployment stage resource. This can be used to create and manage Qovery deployment stages.
    """
    __args__ = dict()
    __args__['id'] = id
    __args__['version'] = version
    opts = pulumi.InvokeOptions.merge(_utilities.get_invoke_opts_defaults(), opts)
    __ret__ = pulumi.runtime.invoke('qovery:index/getDeployment:getDeployment', __args__, opts=opts, typ=GetDeploymentResult).value

    return AwaitableGetDeploymentResult(
        desired_state=pulumi.get(__ret__, 'desired_state'),
        environment_id=pulumi.get(__ret__, 'environment_id'),
        id=pulumi.get(__ret__, 'id'),
        version=pulumi.get(__ret__, 'version'))


@_utilities.lift_output_func(get_deployment)
def get_deployment_output(id: Optional[pulumi.Input[str]] = None,
                          version: Optional[pulumi.Input[Optional[str]]] = None,
                          opts: Optional[pulumi.InvokeOptions] = None) -> pulumi.Output[GetDeploymentResult]:
    """
    ## # Deployment (Data Source)

    Provides a Qovery deployment stage resource. This can be used to create and manage Qovery deployment stages.
    """
    ...